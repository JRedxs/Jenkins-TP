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
                docker {
                    image 'node:20-alpine'
                }
            }
            steps {
                sh 'node --version'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying in GCAR'
            }
        }
    }
}
