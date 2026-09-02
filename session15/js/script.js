///////////////////////task1//////////////////////////

let handleclickEvent = (element)=>{
  let listItems = document.querySelectorAll('.container .custome-list .custome-list-item');
  for(var i = 0; i < listItems.length; i++){
    if(listItems[i] == element)continue;
    listItems[i].classList.remove('text-primary');
  }
  element.classList.add('text-primary');
}
//////////////////////task2///////////////////////////
let users = [];
let loginForom = document.getElementById('loginForom');
loginForom.addEventListener('submit',(e)=>{
  e.preventDefault();
  // console.log("submited");
  // console.log(e.target[0].value); 
   let user = {
    name : e.target[0].value,
    email : e.target[1].value
   };
    // console.log(user);
  users.push(user);
  let div = document.createElement('div');  
  let h4 = document.createElement('h4');
  let h5 = document.createElement('h5');

  h4.innerText = user.name;
  h5.innerText = user.email;

  div.appendChild(h4);
  div.appendChild(h5);

  div.classList.add('bg-warning','rounded-3','p-2');
let parentDiv = document.querySelector('.parent-div');
parentDiv.appendChild(div)
  // (document.querySelector('parent-div')).appendChild(div);

})