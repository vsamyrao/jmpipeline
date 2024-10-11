pipeline {
    agent any
    environment {
        MY_K6 = "C:\\Program Files\\k6"
    }
    stages {
        stage('Performance Testing') {
            steps {                
                echo 'Running K6 performance tests...'                
                bat '%MY_K6%\\k6 --version'
            }
        }
    }
}
