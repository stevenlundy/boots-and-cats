app.factory('RhythmGenerator', function ($http) {
  var parseBeat = function (steps) {
    var data = {};
    data.steps = [];
    for(var i = 0; i < steps.length; i++){
      data.steps.push(steps[i].sound);
    }

    return $http({
      method: 'POST',
      url: '/api/parse-beat',
      data: data
    }).then(function (res) {
      return res.data.syllables;
    })
  };

  return {
    parseBeat: parseBeat
  };
});