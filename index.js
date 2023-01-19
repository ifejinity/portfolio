// Responsive nav
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
    document.getElementById("mybody").style.overflow-y="hidden";
});

// Nav effect
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("mynav").style.height = "4rem";
        document.getElementById("nav-logo").style.width = "45px";
        document.getElementById("nav-logo").style.height = "45px";
        document.getElementById("mynav").style.backgroundColor = "black";
    } else {
        document.getElementById("mynav").style.height = "6rem";
        document.getElementById("nav-logo").style.width = "55px";
        document.getElementById("nav-logo").style.height = "55px";
        document.getElementById("mynav").style.backgroundColor = "transparent";
    }
}
