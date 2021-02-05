document.addEventListener('DOMContentLoaded', function () {
  const btn1 = document.querySelector('#btn1');
  const btn2 = document.querySelector('#btn2');
  const btn3 = document.querySelector('#btn3');
  const paragraphs = document.querySelectorAll('p');

  btn1.addEventListener('click', function () {
    window.location.href = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
  });

  btn2.addEventListener('click', function () {
    paragraphs.forEach((item) => {
      item.setAttribute('class', '');
      item.classList.add('class2');
    });
  });

  btn3.addEventListener('click', function () {
    paragraphs.forEach((item) => {
      item.setAttribute('class', '');
      item.classList.add('class3');
    });
  });
});