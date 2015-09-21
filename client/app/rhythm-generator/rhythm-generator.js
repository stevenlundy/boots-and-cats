app.controller('RhythmGeneratorController', function($scope, $timeout) {
  $scope.tempo = 100;
  $scope.prescale = "_4_4";
  $scope.active = null;
  $scope.steps = [];
  for(var i = 0; i < 16; i++){
    $scope.steps[i] = {
      sound: 'none'
    };
  }

  playNext = function() {
    if($scope.playing){
      $scope.active = ($scope.active + 1) % 16;
      //Somehow play audio file
      $timeout(playNext, 60000/$scope.tempo);
    } else {
      $scope.active = null;
    }
  }

  $scope.play = function(){
    $scope.active = -1;
    $scope.playing = true;
    playNext();
  };

  $scope.stop = function(){
    $scope.playing = false;
  };

});