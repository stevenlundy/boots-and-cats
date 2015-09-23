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
})
.factory('BeatStorage', function ($location) {
  var readBeatStore = function(keyArray){
    var beat = $location.search();
    if(beat.steps === undefined) {
      return beat;
    }
    var steps = [];
    for (var i = 0; i < 16; i++) {
      steps.push({
        sound: keyArray[beat.steps.charAt(i)] || 'none'
      });
    }
    beat.steps = steps;
    return beat;
  };

  var createBeatStore = function (beat, keyArray) {
    var beatString = '';
    for (var i = 0; i < beat.steps.length; i++) {
      beatString += keyArray.indexOf(beat.steps[i].sound);
    }
    beat.steps = beatString;
    return beat;
  };

  var writeBeatStore = function (beat) {
    var path = [];
    for (var key in beat) {
      $location.search(key, beat[key]);
      path.push(key+'='+beat[key]);
    }
    return '?' + path.join('&');
  };

  return {
    readBeatStore: readBeatStore,
    createBeatStore: createBeatStore,
    writeBeatStore: writeBeatStore
  }
});