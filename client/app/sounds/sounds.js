app.controller('SoundController', function($scope) {
  $scope.sounds = [
    { name: 'hihat' },
    { name: 'snare' },
    { name: 'kick' },
    { name: 'none' }
  ];
  for (var i = 0; i < $scope.sounds.length; i++) {
    $scope.sounds[i].audio = new Audio();
    $scope.sounds[i].audio.src = '/assets/samples/' + $scope.sounds[i].name + '.mp3';
  };
});