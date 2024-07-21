//toggle the nav-links
function showNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}


//to slide the image
let slides = document.querySelector('.image-tag');
let currentSlide =0;
let slideInterval = setInterval(nextSlide, 2500); 

function nextSlide() {
    currentSlide = (currentSlide + 1) %3;
    let path=`Images/home-images/image${currentSlide+1}.jpeg`;
    slides.src=path;
}


//when we click links it will give corresponding pages
function showSection(id) {
    var sections = document.getElementsByTagName('section');

    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

//when we click it should hide the nav-links
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        toggleActiveClass(link); 
        document.querySelector('.nav-links').classList.remove('show'); 
});});



