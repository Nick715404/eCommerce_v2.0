const button = document.querySelector(".burger");
const lines = document.querySelectorAll('.burger__lines');
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.close-button');
const menu = document.querySelector('.popup-menu');
const body = document.querySelector('.body');

burger.addEventListener('click', () => {
  menu.classList.add('popup-menu--active');
  body.classList.add('body-active');
});

burgerClose.addEventListener('click', () => {
  menu.classList.remove('popup-menu--active');
  body.classList.remove('body-active');
});

lines.forEach((lines) => {
  button.addEventListener("click", function() {
    lines.classList.remove("burger-active"); // Сбросить предыдущую анимацию
    void lines.offsetWidth; // Принудительно вызываем перерисовку элемента
    lines.classList.add("burger-active"); // Добавляем класс с анимацией
  });
})