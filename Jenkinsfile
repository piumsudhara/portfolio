pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Cleanup Workspace') {
            steps {
                cleanWs()
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
        stage('Install Dependencies') { 
            steps {
                sh 'npm install --force' 
            }
        }
        stage('Node Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}

// pipeline {
//     agent any
//     environment {
//         PATH = "/usr/local/bin:$PATH"
//     }
//     stages {
//         stage('Checkout') {
//             steps {
//                 script {
//                     checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
//                               userRemoteConfigs: [[url: 'https://github.com/piumsudhara/portfolio.git',
//                                                   credentialsId: 'github']]])
//                 }
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }
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
