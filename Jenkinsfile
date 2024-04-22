pipeline {
    agent any
    tools { 
        nodejs 'Node'
    }
    environment {
        DOCKER_IMAGE = 'accounting:latest'
        DOCKER_CONTAINER = 'accounting-node'  
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/develop']], userRemoteConfigs: [[url: 'https://github.com/JRedxs/Jenkins-TP.git']]])
            }
        }
        stage('Install dependencies') {
            steps {
                docker.image('node:20-alpine').inside {
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
                    docker.image('node:20-alpine').inside {
                        sh 'npm test'
                }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("$DOCKER_IMAGE", '.')
                }
            }         
        }
        stage('Run Docker Container'){
            steps {
                script {
                    docker.run("-d --name $DOCKER_CONTAINER -p 3000:3000 $DOCKER_IMAGE")                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying in GCAR'
            }
        }
    }
}
