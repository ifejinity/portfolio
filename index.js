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

// allows to remove overflow of the body
document.getElementById("hamburger").addEventListener("click", overflow);
function overflow() {
    var x = document.getElementById("mybody").style.overflow;

    if (x == "hidden")
    {
        document.getElementById("mybody").style.overflow = "scroll";
    }
    else
    {
        document.getElementById("mybody").style.overflow = "hidden";
    }
}

//for loader
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function () {
            jQuery(document).ready(function() {
                jQuery('#loader').fadeOut(500);
                jQuery("mybody").fadeIn(500);
            });
            document.getElementById("mybody").style.overflow = "scroll";
        }, 100);
        // for wip modal show
        setTimeout(function () {
            jQuery(document).ready(function() {
                jQuery(".modal-wip").fadeIn(500);
            });
        }, 10000);
    }
    else
    {
        document.getElementById("mybody").style.overflow = "hidden";
    }
}

document.getElementById("exit-btn").addEventListener("click", HideWipModal);
function HideWipModal(){
    jQuery(".modal-wip").fadeOut(500);
}
