const bar=document.getElementById('bar')
const close=document.getElementById('close')
const nav=document.getElementById('navbar')
if(bar){
    bar.addEventListener('click',()=>{
      nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
      nav.classList.remove('active')
    })
}



let row = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")
let row4= document.getElementById("row4")
let btn= document.getElementById("remove")
btn.addEventListener("click",function(){
  row.remove();
  console.log("clicked")
})


let btn2= document.getElementById("remove2")
btn2.addEventListener("click",function(){
  row2.remove();
})

let btn3= document.getElementById("remove3")
btn3.addEventListener("click",function(){
  row3.remove();
})

let btn4= document.getElementById("remove4")
btn4.addEventListener("click",function(){
  row4.remove();
})

