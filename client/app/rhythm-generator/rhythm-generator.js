app.controller('RhythmGeneratorController', function($scope){
  $scope.tempo = 100;
  $scope.prescale = "_4_4";
  $scope.steps = [];
  for(var i = 0; i < 16; i++){
    $scope.steps[i] = {
      sound: 'none',
      active: false
    };
  }
});