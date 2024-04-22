pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/develop']], userRemoteConfigs: [[url: 'https://github.com/JRedxs/Jenkins-TP.git']]])            }
        }
        stage('Install dependencies'){
            steps{
                configFileProvider([configFile(fileId: '.npmrc', variable: 'NPM_CONFIG_FILE')]) {
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
                sh (script: 'node ./tests/accounting.js')
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}