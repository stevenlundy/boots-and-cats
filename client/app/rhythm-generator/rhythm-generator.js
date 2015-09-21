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

  $scope.sounds = ['hihat','snare','kick','none'];
  $scope.soundFiles = {};
  for (var i = 0; i < $scope.sounds.length; i++) {
    var audioEl = new Audio();
    audioEl.src = '/assets/samples/' + $scope.sounds[i] + '.mp3';
    $scope.soundFiles[$scope.sounds[i]] = audioEl;
  }

  playNext = function() {
    if($scope.playing){
      $scope.active = ($scope.active + 1) % 16;
      var sound = $scope.steps[$scope.active].sound;
      console.log(sound);
      $scope.soundFiles[sound].play();
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