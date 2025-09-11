pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds-id') // add in Jenkins
        DOCKER_IMAGE = "your-dockerhub-username/my-app-jenkin-react"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-user>/<your-repo>.git'
            }
        }
        stage('Install & Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
            }
        }
        stage('Docker Push') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-creds-id']) {
                    sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker rm -f myapp || true'
                sh 'docker run -d -p 80:80 --name myapp $DOCKER_IMAGE:$BUILD_NUMBER'
            }
        }
    }
}

