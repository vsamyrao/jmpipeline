pipeline {
    agent any
    environment {
        MY_K6 = 'C:\\Program Files\\k6'
        PATH = "${MY_K6};${PATH}"
    }
    stages {
        stage('Performance Testing') {
            steps {                
                echo 'Running K6 performance tests...'
                bat '''
                    echo %PATH%
                    k6 --version
                    k6 run loadtests/performance-test.js
                    echo "hello"
                '''
            }
        }
    }
    post {
        always {
            junit 'junit.xml'
        }
    }
}
