
let handleclickEvent = (element)=>{
  let listItems = document.querySelectorAll('.container .custome-list .custome-list-item');
  for(var i = 0; i < listItems.length; i++){
    if(listItems[i] == element)continue;
    listItems[i].classList.remove('text-primary');
  }
  element.classList.add('text-primary');

}