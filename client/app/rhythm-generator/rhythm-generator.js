app.controller('RhythmGeneratorController', function($scope){
  $scope.steps = [];
  for(var i = 0; i < 16; i++){
    $scope.steps[i] = {
      sound: 'none'
    };
  }
});