const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const closePopupButton = document.getElementById('x-button');
const overlay = document.getElementById('overlay');

const countBtn = document.getElementById('button');
let innerNum = document.getElementById('innerNumber');
let reset = document.getElementById('reset-btn');

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


counter = localStorage.getItem("innerNum");
let clickCounter = counter;

 function clickInit() {
    
    if (clickCounter == undefined) {
      localStorage.setItem("innerNum", clickCounter);
      innerNum.innerText = 0;
    } else {
      counter = parseInt(clickCounter);
    } document.querySelector("innerNumber").innerHTML = innerNum;
  } 
  

countBtn.addEventListener("click", countUp);

function countUp() {
    innerNum.innerText++;
    localStorage.setItem('innerNum', innerNum.innerText);

    if (innerNum.innerText > 5) {
        reset.classList.add('active');
    }
    if (innerNum.innerText <= 5) {
        reset.classList.remove('active');
    }
}

reset.addEventListener("click", resetToZero);

function resetToZero() {
    innerNum.innerText = 0;
    localStorage.clear();
}

 if (window.location.reload) { 
   innerNum.innerText = clickCounter;
}  

 window.addEventListener('onload', clickInit);

 console.log(localStorage);