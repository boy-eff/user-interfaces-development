

function validateEmail(input){
    if (!/\S+@\S+\.\S+/.test(input.value)){
        input.classList.add('_error');
        input.classList.remove('_valid');
        return false;
    }
    else{
        input.classList.remove('_error');
        input.classList.add('_valid');
        return true;
    }
}

function validateNumber(input){
    if (!/\+\d{12}/.test(input.value)){
        input.classList.add('_error');
        input.classList.remove('_valid');
        return false;
    }
    else{
        input.classList.remove('_error');
        input.classList.add('_valid');
        return true;
    }
}

function validateText(input){
    if (input.value == ''){
        input.classList.add('_error');
        input.classList.remove('_valid');
        return false;
    }
    else{
        input.classList.remove('_error');
        input.classList.add('_valid');
        return true;
    }  
}

// функция проверки и вкл/выкл кнопки
const check = () => {
    const isNameValid = validateText(nameInput);
    const isEmailValid = validateEmail(emailInput);
    const isMessageValid = validateText(messageInput);
sendButton.disabled =
!(isNameValid && isEmailValid && isMessageValid);
}

// проверять при изменении инпутов
nameInput.addEventListener('input', check);
emailInput.addEventListener('input', check);
messageInput.addEventListener('input',check);

// проверить разок в самом начале
//check();
sendButton.disabled = true;
