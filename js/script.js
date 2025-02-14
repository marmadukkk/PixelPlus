let body = document.querySelector("body"); // получаем элемент body
body.classList.remove("no-js"); // удаляем класс "no-js" из body, чтобы показать, что JavaScript включен

//=============================================================================================================
// поп-ап с фидбеком
//=============================================================================================================
let formOpenBtn = document.querySelector(".header__feedback-link"); // кнопка для открытия формы фидбека
let feedbackForm = document.querySelector(".feedback"); // элемент формы фидбека
let formCloseBtn = document.querySelector(".feedback__close-btn"); // кнопка для закрытия формы фидбека
let input = document.querySelectorAll(".feedback__input"); // все поля ввода в форме фидбека

// функция для показа формы фидбека
function showForm(event) {
  event.preventDefault(); // отменяем стандартное поведение ссылки
  body.classList.add("overlay"); // добавляем класс "overlay" к body для затемнения фона
  feedbackForm.classList.add("feedback_visible"); // делаем форму видимой
  input[0].focus(); // устанавливаем фокус на первое поле ввода
  feedbackForm.classList.add("feedback_animate"); // добавляем анимацию к форме
}

// функция для закрытия формы фидбека
function closeForm(event) {
  event.preventDefault(); // отменяем стандартное поведение ссылки
  feedbackForm.classList.remove("feedback_animate"); // убираем анимацию
  feedbackForm.classList.remove("feedback_visible"); // скрываем форму
  body.classList.remove("overlay"); // убираем затемнение фона
}

// функция для закрытия формы при нажатии клавиши Esc
function closeFormEsc(event) {
  if (event.keyCode == 27) {
    // проверяем, была ли нажата клавиша Esc
    feedbackForm.classList.remove("feedback_animate"); // убираем анимацию
    feedbackForm.classList.remove("feedback_visible"); // скрываем форму
    body.classList.remove("overlay"); // убираем затемнение фона
  }
}

// добавляем обработчики событий для открытия и закрытия формы
formOpenBtn.addEventListener("click", showForm); // при клике на кнопку открытия формы вызываем showForm
formCloseBtn.addEventListener("click", closeForm); // при клике на кнопку закрытия формы вызываем closeForm
window.addEventListener("keydown", closeFormEsc); // при нажатии клавиш на окне вызываем closeFormEsc

//=============================================================================================================
// слайдер
//=============================================================================================================
let slides = document.querySelectorAll(".slider__slide"); // получаем все слайды с классом "slider__slide"
let currentSlide = 0; // индекс текущего слайда
let slideInterval = setInterval(nextSlide, 4000); // устанавливаем интервал для автоматического переключения слайдов
let next = document.querySelector(".slider__control_prev"); // кнопка для перехода к следующему слайду
let previous = document.querySelector(".slider__control_next"); // кнопка для перехода к предыдущему слайду

// добавляем обработчики событий для кнопок слайдера
next.addEventListener("click", nextSlide); // при клике на кнопку "следующий" вызываем nextSlide
previous.addEventListener("click", previousSlide); // при клике на кнопку "предыдущий" вызываем previousSlide

// функция для перехода к следующему слайду
function nextSlide() {
  clearInterval(slideInterval); // очищаем текущий интервал
  goToSlide(currentSlide + 1); // переходим к следующему слайду
}

// функция для перехода к предыдущему слайду
function previousSlide() {
  clearInterval(slideInterval); // очищаем текущий интервал
  goToSlide(currentSlide - 1); // переходим к предыдущему слайду
}

// функция для перехода к слайду с индексом n
function goToSlide(n) {
  slideInterval = setInterval(nextSlide, 4000); // устанавливаем новый интервал для автоматического переключения
  slides[currentSlide].classList.remove("slider__slide_show"); // убираем класс показа у текущего слайда
  currentSlide = (n + slides.length) % slides.length; // обновляем индекс текущего слайда с учетом количества слайдов
  slides[currentSlide].classList.add("slider__slide_show"); // добавляем класс показа к новому текущему слайду
}
