pipeline {
    agent any
    tools { 
        nodejs 'Node'
    }
    environment {
        DOCKER_IMAGE = 'accounting:latest'
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
            steps {
                script{
                    docker.build(DOCKER_IMAGE, '.')
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying in GCAR'
            }
        }
    }
}
