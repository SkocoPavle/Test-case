// Dugmad za vrstu transporta
const buttons = document.querySelectorAll('.buttons button');
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');

buttons.forEach(button => {
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
