//----------------- bank task -----------------
let users = [];
// add user
function addUser() {
  name = prompt("enter name");
  id = prompt("enter id");
  balance = Number(prompt("enter balance"))
  let user ={
    userName : name,
    userId : id,
    userBalance : balance
  }
  users.push(user);
}

for(let i = 0; i < 3; i++){
  addUser();
}
console.table(users);

//  editUserBalanceByID
function  editUserBalanceByID(){
  let id = prompt("enter id");
  let newbalance = Number(prompt("enter new balance"));
  let element = users.find(item => item.userId == id);
  element.userBalance = newbalance;
  console.log(`editUserBalanceByID: ${element.userBalance}`);
  console.log(`editUserBalanceByID: ${element}`);
}  
editUserBalanceByID();

// transferBalance
function transferBalance(){
  let from = +prompt("enter from user id");
  let to = +prompt("enter to user id");
  let amount = Number(prompt("enteramount"));
  let fromUser = users.find(item => item.userId == from);
  let toUser = users.find(item => item.userId == to);
  fromUser.userBalance -= amount;
  toUser.userBalance += amount;
  debugger
  console.log(`fromUser ${fromUser.userBalance}`);
  console.log(`toUser ${toUser.userBalance}`);

  console.log(`toUser ${toUser}`);//???
}
transferBalance();
// deleteUserByID
// function deleteUserByID ==> id
 function deleteUserByID(){
  let id = prompt("enter user Id to delete ");
  let userIndex = users.findIndex(item => item.userId == id);
  users.splice(userIndex,1);
  console.table(users);
 }
 deleteUserByID();
