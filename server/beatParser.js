var beats = {
  'kick_drum,kick_drum': ['ba','by '],
  'kick_drum,rimshot': ['boo','k '],
  'kick_drum,hi-hat_closed': ['boa','ting '],
  'kick_drum,hi-hat_open': ['boo','ts and '],
  'kick_drum,none': ['boar',' '],
  'kick_drum,snare': ['ba','tch '],
  'rimshot,kick_drum': ['ca','bbie '],
  'rimshot,rimshot': ['co','ke '],
  'rimshot,hi-hat_closed': ['ki','tty '],
  'rimshot,hi-hat_open': ['ca','ts '],
  'rimshot,none': ['car',' '],
  'rimshot,snare': ['ca','tch '],
  'hi-hat_closed,kick_drum': ['ta','ble '],
  'hi-hat_closed,rimshot': ['ta','co '],
  'hi-hat_closed,hi-hat_closed': ['da','ta '],
  'hi-hat_closed,hi-hat_open': ['ta','ts '],
  'hi-hat_closed,none': ['tea',' '],
  'hi-hat_closed,snare': ['di','tch '],
  'hi-hat_open,kick_drum': ['tsu','ba '],
  'hi-hat_open,rimshot': ['s\'o','kay '],
  'hi-hat_open,hi-hat_closed': ['ci','ty '],
  'hi-hat_open,hi-hat_open': ['tse','tse '],
  'hi-hat_open,none': ['tsar',' '],
  'hi-hat_open,snare': ['tsar ','chow '],
  'snare,kick_drum': ['chu','bby '],
  'snare,rimshot': ['che','ck '],
  'snare,hi-hat_closed': ['cha','tty '],
  'snare,hi-hat_open': ['cha','ts '],
  'snare,none': ['chai',' '],
  'snare,snare': ['chur','ch '],
  'none,kick_drum': ['a','pple '],
  'none,rimshot': ['e','cho '],
  'none,hi-hat_closed': ['a','t '],
  'none,hi-hat_open': ['e','tsy '],
  'none,none': [' ',' '],
  'none,snare': ['ea','ch ']
};

module.exports.parse = function(steps){
  var output = [];
  for (var i = 0; i < steps.length; i += 2) {
    var soundPair = steps.slice(i, i+2).toString();
    output = output.concat(beats[soundPair]);
  }
  return output;
}