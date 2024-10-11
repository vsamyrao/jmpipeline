pipeline {
    agent any
    environment {
        MY_K6 = 'C:\\Program Files\\k6'
    }
    stages {
        stage('Performance Testing') {
            steps {                
                echo 'Running K6 performance tests...'
                bat '''
                    set PATH = "%MY_K6%;%PATH%"
                    echo %MY_K6%
                    echo %PATH%
                    k6 --version
                '''
            }
        }
    }
}
