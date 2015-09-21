app.controller('RhythmGeneratorController', function($scope){
  $scope.steps = [];
  $scope.tempo = 100;
  for(var i = 0; i < 16; i++){
    $scope.steps[i] = {
      sound: 'none'
    };
  }
});