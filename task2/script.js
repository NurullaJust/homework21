function reverseCase(inputString) {
  var reversedString = "";
  for (var i = 0; i < inputString.length; i++) {
    var char = inputString.charAt(i);
    if (char === char.toLowerCase()) {
      reversedString += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      reversedString += char.toLowerCase();
    } else {
      reversedString += char;
    }
  }
  return reversedString;
}

var inputStr = "Hello World";
var result = reverseCase(inputStr);
console.log(result);
