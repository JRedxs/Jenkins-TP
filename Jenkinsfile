pipeline {
    agent {
        label 'docker'
    }
    tools { 
        nodejs 'Node',
        dockerTool 'docker'
    }
    environment {
        DOCKER_IMAGE = 'my-node-app:latest'

    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/develop']], userRemoteConfigs: [[url: 'https://github.com/JRedxs/Jenkins-TP.git']]])
            }
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
                sh 'npm run test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(env.DOCKER_IMAGE, '.')
                }
            }         
        }
        stage('Run Docker Container'){
            steps {
                script {
                    docker.run("--rm ${env.DOCKER_IMAGE}")
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
