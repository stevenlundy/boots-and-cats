app.controller('RhythmGeneratorController', function($scope){
  $scope.beats = [];
  for(var i = 0; i < 16; i++){
    $scope.beats[i] = {
      sound: 'none'
    };
  }
});