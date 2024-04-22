pipeline {
    agent any
    tools { 
        nodejs 'Node'
        docker 'docker'
    }
    stages {
        stage('Checkout') {
            steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/develop']], userRemoteConfigs: [[url: 'https://github.com/JRedxs/Jenkins-TP.git']]])            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'No build for this project'
            }
        }
        stage('Test') {
            steps {
                sh (script: 'npm run test')
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('node:20-alpine', '.')
                }
            }         
        }
        stage('Run Docker Container'){
            steps{
                script {
                    docker.run("--rm node:20-alpine")
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}