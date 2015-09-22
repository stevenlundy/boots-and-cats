app.factory('RhythmGenerator', function ($http) {
  var parseBeat = function (steps) {
    return $http({
      method: 'POST',
      url: '/api/parse-beat',
      data: { steps: steps}
    }).then(function (res) {
      return res.data;
    })
  };

  return {
    parseBeat: parseBeat
  };
});