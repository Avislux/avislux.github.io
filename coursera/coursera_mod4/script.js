(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < 10; i++) {
      var firstChar = names[i][0].toLowerCase();
      if (firstChar == 'j'){
          byeSpeaker.speak(names[i]);
      } else{
          helloSpeaker.speak(names[i]);
      }
  }
})(window);