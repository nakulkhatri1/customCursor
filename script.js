let main = document.querySelector("main")
let crsr = document.querySelector(".cursor")
let p = document.querySelector("p")
let isMoving = true
main.addEventListener("mousemove",(cord)=>{
    if(!isMoving) return;  
        crsr.style.left = cord.x+"px"
        crsr.style.top = cord.y+"px"
})

main.addEventListener("click",()=>{
    isMoving = false;
    crsr.style.height = 100+"%";
    crsr.style.width = 100+"%";
    crsr.style.borderRadius = 0+"%";
    crsr.style.top = 0+"%";
    crsr.style.left = 0+"%";
    crsr.style.transition = "all 0.5s ease";
    p.innerHTML=""

})

