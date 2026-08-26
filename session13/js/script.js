// function statment
function print(){
  var start = prompt("enter start");
  var end = prompt("enter end ");
  var skip = prompt("enter skip number");
  var exit = prompt("enter exit number");
  if(start && end && skip && exit){
      for(var i = start; i <= end; i++ ){
      if(i == skip) continue;
      else if(i == exit)break;
      console.log(i);
    }
  }
   else console.log('please enter number')
}
// print();

// function expression
var printNumbers = function(){
  var start = prompt("enter start");
  var end = prompt("enter end ");
  var skip = prompt("enter skip number");
  var exit = prompt("enter exit number");
  if(start && end && skip && exit){
      for(var i = start; i <= end; i++ ){
      if(i == skip) continue;
      else if(i == exit)break;
      console.log(i);
    }
  }
  else alert('please enter number')
}
printNumbers();
