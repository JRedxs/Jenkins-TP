pipeline {
    agent any
    tools { 
        nodejs 'Node'
    }
    environment {
        IMAGE_NAME = 'accounting'
        PROJECT_ID = 'useful-temple-417615'
        IMAGE_TAG = 'latest'
        REGION = 'europe-west1'
        REPOSITORY = 'repo-jenkins'
        IMAGE_URI = "europe-west1-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${IMAGE_NAME}:${IMAGE_TAG}"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/develop']], userRemoteConfigs: [[url: 'https://github.com/JRedxs/Jenkins-TP.git']]])
            }
        }
        stage('Auth with GCP') {
            steps {
                script {
                    withCredentials([file(credentialsId: 'GOOGLE_APPLICATION_CREDENTIALS', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]) {
                        sh "gcloud auth activate-service-account --key-file=\${GOOGLE_APPLICATION_CREDENTIALS}"
                    }
                }
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'No build for this project'
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}", '.')
                }
            }
        }
        stage('Push to Google Artifact Registry') {
            steps {
                script {
                    sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_URI}"
                    sh "gcloud auth configure-docker ${REGION}-docker.pkg.dev --quiet"
                    sh "docker push ${IMAGE_URI}"
                    echo 'Deploy is done!'
                }
            }
        }
    }
}
