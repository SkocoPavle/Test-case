// Dugmad za vrstu transporta
const transportButtons = document.querySelectorAll('.buttons button');
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');

transportButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains("ocean-flc")) {
            originInput.placeholder = "Origin for Ocean FLC";
            destinationInput.placeholder = "Destination for Ocean FLC";
        } 
        else if (button.classList.contains("ocean-lcl")) {
            originInput.placeholder = "Origin for Ocean LCL";
            destinationInput.placeholder = "Destination for Ocean LCL";
        } 
        else if (button.classList.contains("ocean-roro")) {
            originInput.placeholder = "Origin for Ocean RORO";
            destinationInput.placeholder = "Destination for Ocean RORO";
        } 
        else if (button.classList.contains("car-shipping")) {
            originInput.placeholder = "Origin for Car Shipping";
            destinationInput.placeholder = "Destination for Car Shipping";
        } 
        else if (button.classList.contains("air")) {
            originInput.placeholder = "Origin for Air";
            destinationInput.placeholder = "Destination for Air";
        }
    });
});

// Popup
const popup = document.getElementById('popup');
const submitBtn = document.querySelector('.submit-btn');
const trackBtn = document.querySelector('.track-button');

// Otvara popup
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('show');
});

// Zatvara popup
trackBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});

// Dugmad i slajdovi za Ocean Options
const slideButtons = document.querySelectorAll('.options-buttons button');
const slides = document.querySelectorAll('.slider-container > div');

// Funkcija koja uklanja "active" sa svih dugmadi
function removeActive() {
    slideButtons.forEach(btn => btn.classList.remove('active'));
}

// Klikom na dugme scroll do slajda i promena aktivnog dugmeta
slideButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        slides[index].scrollIntoView({ behavior: 'smooth' });
        removeActive();
        btn.classList.add('active');
    });
});

// Menjanje aktivnog dugmeta prilikom scrolla
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('scroll', () => {
    slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        if(rect.top >= 0 && rect.top < window.innerHeight / 2) {
            removeActive();
            slideButtons[index].classList.add('active');
        }
    });
});
