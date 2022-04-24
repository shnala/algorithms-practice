// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function(str, offset) {
  var result = "";

  while (offset < 0) {
    offset = 26 + offset;
  }

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    // charCode will be the UTF code for the character at the current index of the loop.
    var charCode = char.charCodeAt(0);
    // offsetChar is initialized with a value equal to the character of the current iteration of the loop.
    var offsetChar = char;
    // NOTE: fromCharCode is a static method on the String object which will convert UTF values into their corresponding characters. The converted character is returned.
    // The first IF statement handles uppercase letters, i.e. UTF values between 65 and 90.
    if (charCode >= 65 && charCode <= 90) {
      // We are changing the value of offsetChar. We use the static method fromCharCode to grab an affected UTF value. The UTF value is the sum of the var charCode, defined above on line 13, the offset, and -65. I don't know why you subtract 65 or why you % 26.
      offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      offsetChar = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
    }

    result += offsetChar;
  }

  return result;
};

//Solution makes sense in principal but don't understand the logic of the arithmetic on lines 20 and 22. 