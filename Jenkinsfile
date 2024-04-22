pipeline {
    agent any
    tools { 
        nodejs 'Node'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/develop']], userRemoteConfigs: [[url: 'https://github.com/JRedxs/Jenkins-TP.git']]])
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
            agent {
                dockerfile {
                    filename 'Dockerfile'
                    dir 'build'
                    label 'my-defined-label'
                    additionalBuildArgs '--build-arg version=1.0.2'
                    args '-v /tmp:/tmp'
                }
            }
            steps {
                echo 'Docker good'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying in GCAR'
            }
        }
    }
}
