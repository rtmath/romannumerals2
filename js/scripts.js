var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var values = [1, 5, 10, 50, 100, 500, 1000];
var inputValues = [];
var finalValues = [];

var toUpper = function(string) {
  return string.toUpperCase();
};

var getValue = function(letter) {
  var findSymbol = symbols.indexOf(letter);
  if (findSymbol > -1) {
    return letter = values[findSymbol];
  } else {
    alert("Invalid input, please try again.");
  }
};

// var addSymbol = function(number1, number2) {
//   var addResult = number1 + number2;
//   console.log(addResult, typeof(addResult));
//   return addResult;
// }

var makeValueArray = function(string) {
  for (var i = 0; i < string.length; i++) {
    inputValues.push(getValue(string.charAt(i)));
  }
};

var calculateValueArray = function(array) {
  for (var i = 0; i < array.length; i++) {
    var a = array[i];
    var b;
    var c;
    if ((i + 1) < array.length) {
      b = array[i + 1];
    }
    if ((i + 2) < array.length) {
      c = array[i + 2];
    }
    console.log(i + " / " + a + " / " +  b + " / " +  c  + " / " + finalValues);

    if ($.isNumeric(a) && $.isNumeric(b)) {
      if (a >= b) {
        if ($.isNumeric(c)) {
          if (b < c) {
            finalValues.push(a - b);
          }
        } else {
          finalValues.push(a + b);
        }
      } else if (a < b) {
        finalValues.push(b - a);
      }
    } else {
        finalValues.push(a);
    }
  }
  console.log(finalValues);
}

$(document).ready(function() {
  $("#romannumeral").submit(function(event) {
    inputValues = [];
    finalValues = [];
    var getInput = $("#symbol").val();
    // var firstChar = getInput.charAt(0);
    // var secondChar = getInput.charAt(1);
    // var input1 = toUpper(firstChar);
    // var input2 = toUpper(secondChar);
    // // $("#output").text(getValue(input));
    // var inputValue = getValue(input1) + getValue(input2);;
    // $("#output").text(inputValue);
    makeValueArray(getInput);
    calculateValueArray(inputValues);
    $("#output").text(finalValues);

    event.preventDefault();
  });
});
