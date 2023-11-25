function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

document.querySelector('#loginbtn').onclick = () =>{
    document.querySelector('.login-form').classList.toggle('active');
  }
  document.querySelector('#closeloginform').onclick = () =>{
    document.querySelector('.login-form').classList.remove('active');
  }


  function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;


    emailSend();

    alert("We received your contact information. We will call you back soon!");

    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("email").value = '';

    return false;
}

function emailSend() {
    console.log("Email sent!");
}


    function makeBigger() {
        document.getElementById("logo").style.transform = "scale(1.2)";
    }

    function makeSmaller() {
        document.getElementById("logo").style.transform = "scale(1)";
    }


    function playSound() {
        var audio = document.getElementById("clickSound");
        audio.load();
        audio.play().then(() => {
            console.log("Audio played successfully!");
        }).catch(error => {
            console.error("Error playing audio:", error);
        });
    }


    function toggleNav() {
        var navLinks = document.querySelector('.nav-links');
        navLinks.style.display = (navLinks.style.display === 'flex' || navLinks.style.display === '') ? 'none' : 'flex';
    }
