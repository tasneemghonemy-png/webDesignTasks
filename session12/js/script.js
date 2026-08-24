console.log('hello world');

var firstName = "tasneem";

var lastName = "Ahmed";

// concatenate
var fullName = firstName + " " + lastName;

console.log(fullName);
// --------------------------------------------------

//tamplet string 
var bio = `my name is ${firstName} ${lastName}`;
console.log(bio);
// --------------------------------------------------
  var g;
  console.log(g); //undefined
  g = null;
  console.log(g); //null
// --------------------------------------------------

//   var userName = prompt("enter your name");
//   console.log(userName);
    //input => input
    // cancel => null
    // ok => empty string
    //   prompt() => string | null
// --------------------------------------------------
var x = 20;
var y = 30;
console.log(`x + y = ${x + y}`);
var text = "text"
console.log(x + text); // 20text
console.log(text - x);// NaN (not a number) can not operate
// --------------------------------------------------

var xx = 10;
console.log(`postincriment ${xx++}`);//10

console.log(`preincriment ${++xx}`);//12
// --------------------------------------------------

// typeof variableName or typeof(variableName)
var a ;
console.log(typeof a);
a = "text"
console.log(typeof a);
a = 20
console.log(typeof(a));
a = true
console.log(typeof a);
// --------------------------------------------------
// loical operation
var w = 20;
var r = 20;
var z = "20"
console.log(w == r );//true
console.log(w === r );//true
console.log(w == z );//true
console.log(w === z );//false // value and type

console.log(w != r );//false
console.log(w !== z );//false

console.log(typeof z == "Number"); // "number" == "Number" => false
console.log(typeof z == "number"); // "number" == "number" => true

// ternary operators
// var uName = prompt("enter name");
// (uName == "ahmed" || uName =="AHMED") ? console.log("welcome ahmed") : console.log('invalid');

var degree = prompt("enter your degree");
if(degree == null || degree == "") console.log("please enter degree");
else if(degree > 100) console.log("invalid degree");
else if(degree >= 90 && degree <= 100) console.log("A");
else if(degree >= 80 && degree < 90) console.log("B");
else if(degree >= 70 && degree < 80) console.log("C");
else  console.log("F");













