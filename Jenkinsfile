pipeline {
    agent any
    environment {
        PATH = "C:\\Program Files\\k6"
    }
    stages {
        stage('Performance Testing') {
            steps {                
                echo 'Running K6 performance tests...'                
                bat "cmd /c k6 run loadtests/performance-test.js"
            }
        }
    }
}
