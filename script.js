/ Screen /

let screen = document.getElementById("screen"); screen.textContent ="0"

/* Numbers */

/* function */

function pressNumber(number) {
  if (screen.textContent == "0") {
    screen.textContent = number;
  } else {
    screen.textContent += number;
  }
};

document
.getElementById("dot")
.onclick = function (){
  pressNumber(".")
};

document
.getElementById("zero")
.onclick = function () {
  pressNumber("0")
};

document 
.getElementById("one")
.onclick = function () {
  pressNumber("1")
};

document 
.getElementById("two")
.onclick = function () {
  pressNumber("2")
};

document 
.getElementById("three")
.onclick = function () {
  pressNumber(3)
};

document 
.getElementById("four")
.onclick = function () {
pressNumber("4")
};

document 
.getElementById("five")
.onclick = function () {
 pressNumber("5")
};

document 
.getElementById("six")
.onclick = function () {
  pressNumber(6)
};

document 
.getElementById("seven")
.onclick = function () {
  pressNumber("7")
};

document 
.getElementById("eight")
.onclick = function () {
  pressNumber("8")
};

document 
.getElementById("nine")
.onclick = function () {
 pressNumber("9")
};


/* Bracket */
let nextBracket = "("

document.getElementById("bracket").onclick = function () {
  
  let bracket = nextBracket;

if (screen.textContent == "0") {
    screen.textContent = bracket;
} else {
    screen.textContent = screen.textContent + bracket;
}

if (nextBracket == "(") {
    nextBracket = ")";
} else {
    nextBracket = "(";
}
};


/ Delete options  /

document
.getElementById("ac")
.onclick = function () {
  screen.textContent = "0"
};

document
.getElementById("de")
.onclick = function () {
  screen.textContent = screen.textContent.slice(0, length -1);
};


/ Operators /

let firstNumber;
let operator;

function pressOperator(sign) {
  firstNumber = screen.textContent;
  operator = sign
  screen.textContent = "0"
}

document 
.getElementById("division")
.onclick = function () {
  pressOperator("/")
}

document 
.getElementById("plus")
.onclick = function () {
 pressOperator("+")
}

document 
.getElementById("minus")
.onclick = function () {
  pressOperator("-")
}

document 
.getElementById("multiply")
.onclick = function () {
  pressOperator("*")
}

document
.getElementById("reminder")
.onclick = function () {
  pressOperator("%")
}




/* Equal to */

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function division(a, b) {
  return Number(a) / Number(b)
}

function multiply(a, b) {
  return Number(a) * Number(b)
}

function reminder(a, b) {
  return Number(a) % Number(b)
}

document
.getElementById("equal")
.onclick = function  () {
  
  let secondNumber = screen.textContent;
  
  if (operator == "+") {
    screen.textContent = add(firstNumber, secondNumber);
  }
  else if (operator == "-") {
    screen.textContent = subtract(firstNumber, secondNumber);
  }
  else if (operator == "*") {
  screen.textContent = multiply(firstNumber, secondNumber)
  }
  else if (operator == "/") {
    screen.textContent = division(firstNumber, secondNumber)
  }
  else if (operator == "%") {
    screen.textContent = reminder(firstNumber, secondNumber)
  }
};
