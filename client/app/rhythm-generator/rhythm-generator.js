app.controller('RhythmGeneratorController', function($scope, $timeout) {
  $scope.tempo = 100;
  $scope.prescale = '_4_4';
  $scope.active = null;
  $scope.steps = [];
  $scope.clear = function(){
    for(var i = 0; i < 16; i++){
      $scope.steps[i] = {
        sound: 'none'
      };
    }
  };
  $scope.clear();

  $scope.sounds = ['hi-hat_closed','hi-hat_open','rimshot','snare','kick_drum','none'];
  $scope.soundFiles = {};
  for (var i = 0; i < $scope.sounds.length; i++) {
    var audioEl = new Audio();
    audioEl.src = '/assets/samples/' + $scope.sounds[i] + '.mp3';
    $scope.soundFiles[$scope.sounds[i]] = audioEl;
  }

  $scope.formatSpaces = function (text) {
    return text.replace(/_/, ' ');
  }

  $scope.playSound = function (sound) {
    $scope.soundFiles[sound].currentTime = 0; // Seek to beginning if already playing
    $scope.soundFiles[sound].play();
  };

  var playNext = function() {
    if($scope.playing){
      $scope.active = ($scope.active + 1) % 16;
      $scope.playSound($scope.steps[$scope.active].sound);
      $timeout(playNext, getInterval());
    } else {
      $scope.active = null;
    }
  };

  var getInterval = function() {
    var stepsPerBeat;
    if($scope.prescale === '_4_4'){
      stepsPerBeat = 4;
    } else if($scope.prescale === '_3_4'){
      stepsPerBeat = 2;
    } else if($scope.prescale === '_2_4'){
      stepsPerBeat = 8;
    } else if($scope.prescale === '_6_8'){
      stepsPerBeat = 3;
    }
    return 60000/stepsPerBeat/$scope.tempo;
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