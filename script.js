// ===============================
// VANTA 3D BACKGROUND
// ===============================

VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,

    minHeight: 200.00,
    minWidth: 200.00,

    scale: 1.00,
    scaleMobile: 1.00,

    color: 0x00d4ff,
    backgroundColor: 0x0b1120,

    points: 12,
    maxDistance: 22,
    spacing: 18
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "flex";

    }else{

        scrollBtn.style.display = "none";

    }

});
// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===============================
// SCROLL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
".hero, .about, .skills, .projects, .certificates, .contact");

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight-120){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});
// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.querySelector(".typing");

const words = [
    "Web Developer",
    "BCA Student",
    "Frontend Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typingText) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0, charIndex++);
    }else{

        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && charIndex > currentWord.length){

        deleting = true;
        speed = 1500;

    }else if(deleting && charIndex < 0){

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// ===============================
// IMAGE FLOAT ANIMATION
// ===============================

const heroImage = document.querySelector(".hero-right img");

if(heroImage){

setInterval(()=>{

heroImage.classList.toggle("float");

},2000);

}


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("Welcome to Dipak Zope Portfolio 🚀");

// ===============================
// CURSOR GLOW EFFECT
// ===============================

const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", (e)=>{

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});


// ===============================
// PAGE LOADING EFFECT
// ===============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// ===============================
// BUTTON CLICK EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn, .project-btn");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(0.95)";

        setTimeout(()=>{

            button.style.transform="";

        },150);

    });

});


// ===============================
// CARD 3D TILT EFFECT
// ===============================

const cards = document.querySelectorAll(
".skill-card, .project-card, .certificate-card"
);


cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height/2) / 15;
        const rotateY = (rect.width/2 - x) / 15;


        card.style.transform =
        `perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});
