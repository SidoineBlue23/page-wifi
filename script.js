let change = document.querySelector(".btn2")
let change2 = document.querySelector(".btn1")
let element1 = document.querySelector(".input")
let element2 = document.querySelector(".input2")
let menu = document.querySelector("header .bx")
let telMenu = document.querySelector("header ul")


change.addEventListener('click', function(){
    element1.style.display= 'none'
    element2.style.display= 'block'
    console.log('cliquer')
    
})


change2.addEventListener('click', function(){
    element1.style.display= 'block'
    element2.style.display= 'none'
    console.log('cliquer')
    
})

menu.addEventListener('click' , function(){
   telMenu.classList.toggle("shoh_menu")
   console.log('sid');
   
    
})