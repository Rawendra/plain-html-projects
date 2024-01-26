const button = document.getElementById("my-button");
const container = document.querySelector(".container");
let toggle=true
button.addEventListener("click", () => {
  if(toggle){
    container.classList.add("show-nav");
    
  }else{
    container.classList.remove("show-nav");
  }
  toggle=!toggle
  
});

const open = document.getElementById('open')
const close = document.getElementById('close')
 
open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))