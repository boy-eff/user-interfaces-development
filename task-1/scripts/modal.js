var modal = document.getElementById("myModal");
var inputEmail = document.getElementById("modalInputEmail");
var inputName = document.getElementById("modalInputName");
var inputNumber = document.getElementById("modalInputNumber");
var modalBtn = document.getElementById("modalBtn");
var modal1 = document.getElementById("myModal1");
var modalBtns1 = document.getElementsByClassName("services__cards__item__btn");

inputEmail.addEventListener("input", check);
modalBtn.disabled = "true";

// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
Array.prototype.forEach.call(btns, function(el){
    el.onclick = function() {
        modal.style.display = "block";
      }
})

Array.prototype.forEach.call(modalBtns1, function(el){
    el.onclick = function() {
        modal1.style.display = "block";
      }
})




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

const checkInput = () => {
    const isEmailValid = validateEmail(inputEmail);
    const isTextValid = validateText(inputName);
    const isNumberValid = validateNumber(inputNumber);
modalBtn.disabled =
!(isEmailValid && isTextValid && isNumberValid);
}

inputEmail.addEventListener("input", checkInput);
inputName.addEventListener("input", checkInput);
inputNumber.addEventListener("input", checkInput);
modalBtn.addEventListener("click", CloseModal);
modalBtn.addEventListener("click", sayHi);

function CloseModal()
{
    setTimeout(() => {modal.style.display = "none"}, 5000)
}

function sayHi() {
    alert('Данные успешно отправлены');
  }