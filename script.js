

fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
            });

function onBtnClick(){
    window.location.href = 'event-details.html'; // Navigate to event-details.html
}

function registerBtnClick(){
    window.location.href = 'form2.html';
}
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    // authButtons.classList.toggle('active');
    
    
}