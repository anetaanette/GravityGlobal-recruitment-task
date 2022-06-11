console.log("kesjfbnkj");

const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');


const closePopupButton = document.getElementById('x-button');
const overlay = document.getElementById('overlay');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.modalTarget);
        openPopup(popup);
    })
})

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('#popup.active');
    popups.forEach(popup => {
        closePopup(popup);
    })
}) 

closePopupButton.addEventListener('click', () => {
    const popups = document.querySelectorAll('#popup.active');
    popups.forEach(popup => {
        closePopup(popup);
    })
}) 

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('popup');
        closePopup(popup);
    })
})

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active');
    overlay.classList.remove('active');
};


const countBtn = document.getElementById('button');
let innerNum = document.getElementById('innerNumber');
let reset = document.getElementById('reset-btn');
let counter = localStorage.getItem('innerNum') || 0;


countBtn.addEventListener("click", countUp);

function countUp() {
    innerNum.innerText++;
    if (innerNum.innerText > 5) {
        reset.classList.add('active');
    }
    localStorage.setItem('innerNum', innerNum);
}

reset.addEventListener("click", resetToZero);

function resetToZero() {
    innerNum.innerText = 0;
}

// console.log(localStorage.getItem('innerNum'));



window.addEventListener('load', (event) => {
    localStorage.getItem('counter', counter);
  }); 