pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {                
                echo 'Running K6 performance tests...'                
                bat "cmd /c k6 run loadtests/performance-test.js"
            }
        }
    }
}
