const button = document.querySelector(".burger");
const lines = document.querySelectorAll('.burger__lines');

lines.forEach((lines) => {
  button.addEventListener("click", function() {
    lines.classList.remove("burger-active"); // Сбросить предыдущую анимацию
    void lines.offsetWidth; // Принудительно вызываем перерисовку элемента
    lines.classList.add("burger-active"); // Добавляем класс с анимацией
  });
})