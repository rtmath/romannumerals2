var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var values = [1, 5, 10, 50, 100, 500, 1000];

function oneDigit(userInput) {
  if (userInput === 1) {
  var userInput = "I";
    return userInput;
  }
  if (userInput === 2) {
    var userInput = "II";
    return userInput;
  }
  if (userInput === 3) {
    var userInput = "III";
    return userInput;
  }
  if (userInput === 4) {
    var userInput = "IV";
    return userInput;
  }
  if (userInput === 5) {
    var userInput = "V";
    return userInput;
  }
  if (userInput === 6) {
    var userInput = "VI";
    return userInput;
  }
  if (userInput === 7) {
    var userInput = "VII";
    return userInput;
  }
  if (userInput === 8) {
    var userInput = "VIII";
    return userInput;
  }
  if (userInput === 9) {
    var userInput = "IX";
    return userInput;
  }
  if (userInput === 0) {
    var userInput = "";
    return userInput;
  }
}

function twoDigits(userInput) {
  if (userInput === 1) {
    var userInput = "X";
    return userInput;
  }
  if (userInput === 2) {
    var userInput = "XX";
    return userInput;
  }
  if (userInput === 3) {
    var userInput = "XXX";
    return userInput;
  }
  if (userInput === 4) {
    var userInput = "XL";
    return userInput;
  }
  if (userInput === 5) {
    var userInput = "L";
    return userInput;
  }
  if (userInput === 6) {
    var userInput = "LX";
    return userInput;
  }
  if (userInput === 7) {
    var userInput = "LXX";
    return userInput;
  }
  if (userInput === 8) {
    var userInput = "LXXX";
    return userInput;
  }
  if (userInput === 9) {
    var userInput = "XC";
    return userInput;
  }
  if (userInput === 0) {
    var userInput = "";
    return userInput;
  }
}

function threeDigits(userInput) {
  if (userInput === 1) {
    var userInput = "C";
    return userInput;
  }
  if (userInput === 2) {
    var userInput = "CC";
    return userInput;
  }
  if (userInput === 3) {
    var userInput = "CCC";
    return userInput;
  }
  if (userInput === 4) {
    var userInput = "CD";
    return userInput;
  }
  if (userInput === 5) {
    var userInput = "D";
    return userInput;
  }
  if (userInput === 6) {
    var userInput = "DC";
    return userInput;
  }
  if (userInput === 7) {
    var userInput = "DC";
    return userInput;
  }
  if (userInput === 8) {
    var userInput = "DCCC";
    return userInput;
  }
  if (userInput === 9) {
    var userInput = "CM";
    return userInput;
  }
  if (userInput === 0) {
    var userInput = "";
    return userInput;
  }
}

function fourDigits(userInput) {
  if (userInput === 1) {
    var userInput = "M";
    return userInput;
  }
  if (userInput === 2) {
    var userInput = "MM";
    return userInput;
  }
  if (userInput === 3) {
    var userInput = "MMM";
    return userInput;
  }
  if (userInput === 0) {
    var userInput = "";
    return userInput;
  }
}

function combineDigit(input, length) {
  if(length === 4) {
    var thousands = parseInt(input.charAt(0));
    var hundreds = parseInt(input.charAt(1));
    var tens = parseInt(input.charAt(2));
    var one = parseInt(input.charAt(3));
    return fourDigits(thousands) + threeDigits(hundreds) + twoDigits(tens) + oneDigit(one);
  }
  if(length === 3) {
    var hundreds = parseInt(input.charAt(0));
    var tens = parseInt(input.charAt(1));
    var one = parseInt(input.charAt(2));
    return threeDigits(hundreds) + twoDigits(tens) + oneDigit(one);
  }
  if(length === 2) {
    var tens = parseInt(input.charAt(0));
    var one = parseInt(input.charAt(1));
    return twoDigits(tens) + oneDigit(one);
  }
  if(length === 1) {
    var one = parseInt(input.charAt(0));
    return oneDigit(one);
  }
}

function numberValidation(number) {
  if (parseInt(number) > 0 && parseInt(number) < 3999) {
    return true;
  } else {
    return false;
  }
}

function getSymbol(number) {
  var getIndex = values.indexOf(number);
  var symbol = symbols[getIndex];
  return symbol;
}

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var input = $("#value").val();
    var lengthOfInput = input.length;
    if (numberValidation(input) === true) {
      $("#output").text(combineDigit(input, lengthOfInput));
    } else {
      alert("Please enter a valid number");
    }
  });
});
