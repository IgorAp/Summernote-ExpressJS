pipeline {
    agent { docker { image 'node:alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
    }
}