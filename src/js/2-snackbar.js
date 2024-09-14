import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('button[data-submit]');
const inputElement = document.querySelector(
  'input[type="number"][name="delay"]'
);
const form = document.querySelector('form');

const fulfilled = document.querySelector(
  `input[type="radio"][name="state"][value="fulfilled"]`
);
const rejected = document.querySelector(
  `input[type="radio"][name="state"][value="rejected"]`
);

btn.addEventListener('click', () => {
  const delay = parseInt(inputValue); // Отримуємо значення затримки з поля вводу
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilled.checked) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${inputValue}ms`,
        backgroundColor: '#59A10D',
        messageSize: 16,
        messageColor: '#FFF',
        iconColor: '',
        titleColor: '#FAFAFB',
        icon: 'checkmark-circle-outline',
        iconUrl: '../img/bi_check2-circle (1).svg',
        titleSize: 16,
        messageLineHeight: 24,
      });

      console.log(`✅ Fulfilled promise in ${inputValue}ms`);
    })
    .catch(delay => {
      iziToast.error({
        title: 'ERROR',
        message: `❌ Rejected promise in ${inputValue}ms`,
        backgroundColor: '#EF4040',
        messageSize: 16,
        messageColor: '#FFFF',
        iconColor: '',
        titleColor: '#FAFAFB',
        icon: 'fa fa-user',
        iconUrl: '../img/bi_x-octagon (1).svg',
        titleSize: 16,
        messageLineHeight: 24,
      });
      console.log(`❌ Rejected promise in ${inputValue}ms`);
    });
});

let inputValue = 0;

inputElement.addEventListener('change', time => {
  inputValue = time.target.value;
  console.log(inputValue);
});

form.addEventListener('submit', submit => {
  submit.preventDefault();
});
