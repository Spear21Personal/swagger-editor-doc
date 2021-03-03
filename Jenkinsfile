node () {
    stage('Get Git') {
        checkout scm
    }
    stage('Install modules') {
        nodejs('nodejs'){
            sh 'npm install'
            echo "Modules Installed"
        }

    }
    stage('Test'){
      nodejs('nodejs'){
        echo "Test Complete"
      }
    }
   
    // stage('Package Build') {
    // sh 'tar -zcvf bundle.tar.gz'
    // }
    // stage('Artifact Creation') {
    //     fingerprint 'bundle.tar.gz'
    //     archiveArtifacts 'bundle.tar.gz'
    //     echo 'Artifacts Created'
    // }
    // stage('Stash Changes') {
    //     stash allowEmpty: true, include: 'bundle.tar.gz', name: 'buildArtifacts'
    // }
}

node('build-serve-one') {
    // echo 'Unstash'
    // unstash 'buildArtifacts'
    // echo 'Artifacts Copied'

    echo 'Copy'
    // sh 'yes | sudo cp -R bundle.tar.gz /var/www/html && cd /var/www/html && sudo tar -xvf bundle.tar.gz'
    sh 'yes | sudo cp -R  /var/www/html/api'
    echo ' Complete'

}
