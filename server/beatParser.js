var beats = {
  'kick_drum,kick_drum': 'baby',
  'kick_drum,rimshot': 'book',
  'kick_drum,hi-hat_closed': 'boating',
  'kick_drum,hi-hat_open': 'boots and',
  'kick_drum,none': 'boar',
  'kick_drum,snare': 'batch',
  'rimshot,kick_drum': 'cabbie',
  'rimshot,rimshot': 'coke',
  'rimshot,hi-hat_closed': 'kitty',
  'rimshot,hi-hat_open': 'cats',
  'rimshot,none': 'car',
  'rimshot,snare': 'catch',
  'hi-hat_closed,kick_drum': 'table',
  'hi-hat_closed,rimshot': 'taco',
  'hi-hat_closed,hi-hat_closed': 'data',
  'hi-hat_closed,hi-hat_open': 'tats',
  'hi-hat_closed,none': 'tea',
  'hi-hat_closed,snare': 'ditch',
  'hi-hat_open,kick_drum': 'tsuba',
  'hi-hat_open,rimshot': 's\'okay',
  'hi-hat_open,hi-hat_closed': 'city',
  'hi-hat_open,hi-hat_open': 'tsetse',
  'hi-hat_open,none': 'tsar',
  'hi-hat_open,snare': 'tsar chow',
  'snare,kick_drum': 'chubby',
  'snare,rimshot': 'check',
  'snare,hi-hat_closed': 'chatty',
  'snare,hi-hat_open': 'chats',
  'snare,none': 'chai',
  'snare,snare': 'church',
  'none,kick_drum': 'apple',
  'none,rimshot': 'echo',
  'none,hi-hat_closed': 'at',
  'none,hi-hat_open': 'etsy',
  'none,none': 'aha',
  'none,snare': 'each'
};

module.exports.parse = function(steps){
  var output = [];
  for (var i = 0; i < steps.length; i += 2) {
    var soundPair = steps.slice(i, i+2).toString();
    output.push(beats[soundPair]);
  }
  return output.join(' ');
}