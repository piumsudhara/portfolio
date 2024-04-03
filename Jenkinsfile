pipeline {
    agent any
    
    stages {
        stage('Build') {
            matrix {
                axes {
                    axis {
                        name 'NODE_VERSION'
                        values '18.x'
                    }
                }
            }
            steps {
                checkout scm
                container('node:${NODE_VERSION}') {
                    sh 'yarn install && yarn build'
                }
                archiveArtifacts artifacts: 'build', allowEmptyArchive: true
            }
        }
        
        stage('Deploy') {
            agent any
            steps {
                checkout scm
                unarchive mapping: ['build' : 'build']
                withCredentials([string(credentialsId: 'FIREBASE_SERVICE_ACCOUNT_PIUM95', variable: 'FIREBASE_SERVICE_ACCOUNT_PIUM95')]) {
                    sh 'npx firebase deploy --token $FIREBASE_SERVICE_ACCOUNT_PIUM95 --only hosting:live --project pium95'
                }
            }
        }
    }
}
