const mainForm = document.forms.mainForm;
const nameInput = mainForm.nameInput;
const emailInput = mainForm.emailInput;
const messageInput = mainForm.messageInput;
const sendButton = mainForm.sendButton;
const popup = document.getElementById('popup');

mainForm.addEventListener('submit',formSend);
async function formSend(e){
    e.preventDefault();
    popupOpen(popup);
    setInterval(popupClose,5000,popup);
    mainForm.reset();
    formresetColours('input');
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length>0){
    for (let index = 0; index < popupCloseIcon.length; index++){
        const e1 = popupCloseIcon[index];
        e1.addEventListener('click',function(e){
            popupClose(e1.closest('.popup'));
            e.preventDefault();
        })
    }
}

document.addEventListener('keydown', function (e){
    if (e.key === "Escape"){
        popupClose(popup);
    }
})

function popupOpen(currentPopup){
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e){
        if (!e.target.closest('.popup__content')){
            popupClose(e.target.closest('.popup'))
        }
    })    
}

function popupClose(popupActive){
    popupActive.classList.remove('open');
}

function formresetColours(className){
    var ndList = document.getElementsByClassName(className);
    for (var i = 0; i < ndList.length; ++i) {
        ndList[i].classList.remove('_valid');
      }
}
