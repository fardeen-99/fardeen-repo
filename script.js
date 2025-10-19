    let nav=document.querySelector(".head")
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 50){
            nav.classList.add("scroll")
        }else{
            nav.classList.remove("scroll")
        }
    })
const burgerIcon = document.querySelector(".h3");
const burgerMenu = document.querySelector(".burg");
const barIcon = document.querySelector(".h3 i");
const body = document.body;

burgerIcon.addEventListener("click", () => {
    const isOpen = burgerMenu.classList.toggle("add");

    if (isOpen) {
        barIcon.classList.remove("fa-bars");
        barIcon.classList.add("fa-xmark");
        body.classList.add("blur-active"); // blur + stop scroll
    } else {
        barIcon.classList.remove("fa-xmark");
        barIcon.classList.add("fa-bars");
        body.classList.remove("blur-active");
    }
});

// Close when link clicked
document.querySelectorAll(".burg a").forEach(link => {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove("add");
        barIcon.classList.remove("fa-xmark");
        barIcon.classList.add("fa-bars");
        body.classList.remove("blur-active"); // remove blur + restore scroll
    });
});