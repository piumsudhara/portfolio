pipeline {
    agent any
    stages {
        stage('Install Coreutils') {
            steps {
                sh 'apt-get update && apt-get install -y coreutils'
            }
        }
        stage('Checkout') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
                              userRemoteConfigs: [[url: 'https://github.com/piumsudhara/portfolio.git',
                                                  credentialsId: 'github']]])
                }
            }
        }
    }
}

        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }
        // stage('Deploy to Firebase') {
        //     steps {
        //         checkout scm
        //         unarchive mapping: ['build' : 'build']
        //         withCredentials([string(credentialsId: 'FIREBASE_SERVICE_ACCOUNT_PIUM95', variable: 'FIREBASE_SERVICE_ACCOUNT_PIUM95')]) {
        //             sh 'npx firebase deploy --token $FIREBASE_SERVICE_ACCOUNT_PIUM95 --only hosting:live --project pium95'
        //         }
        //     }
        // }
//     }
// }
