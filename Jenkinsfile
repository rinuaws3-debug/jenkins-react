pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "rinuaws-debug/jenkins-react" // your DockerHub repo
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rinuaws-debug/jenkins-react.git'
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
                withDockerRegistry([credentialsId: 'dockerhub-cred', url: '']) {
                    sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  docker rm -f myapp || true
                  docker run -d -p 80:80 --name myapp $DOCKER_IMAGE:$BUILD_NUMBER
                '''
            }
        }
    }
}

