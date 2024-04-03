pipeline {
    agent any
    environment {
        PATH = "/usr/bin:/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to Firebase') {
            steps {
                withCredentials([string(credentialsId: 'firebase-token', variable: 'FIREBASE_TOKEN')]) {
                    sh 'firebase deploy --token "$FIREBASE_TOKEN"'
                }
            }
        }
    }
}
