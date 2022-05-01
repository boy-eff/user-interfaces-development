document.body.onload = initializeSlider;
const itemsAmount = 3;
let sliderItems = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
let timer = setInterval(nextSlide, 7000)
function initializeSlider()
{
    var slider = document.getElementById("slider");
    var item = document.getElementById("first_item");
    for (let i = 0; i < itemsAmount; i++)
    {
        sliderItems[i].classList.add("team_member");
        slider.insertBefore(sliderItems[i], item);
    }
}

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = localStorage.getItem("slideIndex") == null ? 0 : parseInt(localStorage.getItem("slideIndex"));
console.log(slideIndex);
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    localStorage.setItem("slideIndex", slideIndex);
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    /* Проверяем количество слайдов: */
    if (n > slides.length - 1) {
      slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    for (let slide of sliderItems)
    {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    for (let i = 0; i < itemsAmount; i++)
    {
        sliderItems[i].innerHTML = slides[(slideIndex + i) % slides.length].innerHTML;
        sliderItems[i].style.display = "block";
    }
}
