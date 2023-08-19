// JavaScript
const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');

const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('#month');
const inputDay = document.querySelector('#day');

const form = document.querySelector('.form');

// function validate(element, e) {
//   const parent = e.currentTarget.parentElement.parentElement;
//   const nextSibling = e.currentTarget.nextElementSibling;

//   if (element.id === 'day') {
//     if (element.value < 1 || element.value > 31) {
//       parent.classList.add('active');
//       nextSibling.innerHTML = 'Must be a valide date';
//     }
//   } else if (element.id === 'month') {
//     if (inputMonth.value < 1 || inputMonth.value > 12) {
//       parent.classList.add('active');
//       nextSibling.innerHTML = 'Must be a valide month';
//     }
//   } else if (element.id === 'year') {
//     if (inputYear.value > currentYear) {
//       parent.classList.add('active');
//       nextSibling.innerHTML = 'Must be in the past';
//     }
//   }

//   if (inputMonth.value === '') {
//     parent.classList.add('active');
//     nextSibling.innerHTML = 'This field is required';
//   } else {
//     parent.classList.remove('active');
//     nextSibling.innerHTML = '';
//   }
// }

inputDay.addEventListener('input', function (e) {
  const parent = e.currentTarget.parentElement.parentElement;
  const nextSibling = e.currentTarget.nextElementSibling;

  if (inputDay.value === '') {
    parent.classList.add('active');
    nextSibling.innerHTML = 'This field is required';
  } else if (inputDay.value < 1 || inputDay.value > 31) {
    parent.classList.add('active');
    nextSibling.innerHTML = 'Must be a valide date';
  } else {
    parent.classList.remove('active');
    nextSibling.innerHTML = '';
  }
});

inputMonth.addEventListener('input', function (e) {
  const parent = e.currentTarget.parentElement.parentElement;
  const nextSibling = e.currentTarget.nextElementSibling;

  if (inputMonth.value === '') {
    parent.classList.add('active');
    nextSibling.innerHTML = 'This field is required';
  } else if (inputMonth.value < 1 || inputMonth.value > 12) {
    parent.classList.add('active');
    nextSibling.innerHTML = 'Must be a valide month';
  } else {
    parent.classList.remove('active');
    nextSibling.innerHTML = '';
  }
});

inputYear.addEventListener('input', function (e) {
  const parent = e.currentTarget.parentElement.parentElement;
  const nextSibling = e.currentTarget.nextElementSibling;

  const currentYear = new Date().getFullYear();
  if (inputYear.value === '') {
    parent.classList.add('active');
    nextSibling.innerHTML = 'This field is required';
  } else if (inputYear.value > currentYear) {
    parent.classList.add('active');
    nextSibling.innerHTML = 'Must be in the past';
  } else {
    parent.classList.remove('active');
    nextSibling.innerHTML = '';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let iMonth = parseInt(inputMonth.value) - 1;
  let iYear = parseInt(inputYear.value);
  let iDate = parseInt(inputDay.value);

  let previousDate = new Date(iYear, iMonth, iDate);
  let currentDate = new Date();

  // Calculate the age difference in years, months, and days.
  let ageInMilliseconds = currentDate - previousDate;
  let ageDate = new Date(ageInMilliseconds); // Convert the time difference to a date object.
  let calculatedYear = ageDate.getUTCFullYear() - 1970; // 1970 is the starting year for the ageDate object.
  let calculatedMonth = ageDate.getUTCMonth();
  let calculatedDay = ageDate.getUTCDate() - 1; // Subtract 1 to get the correct day.

  outputYear.innerHTML = calculatedYear;
  outputMonth.innerHTML = calculatedMonth;
  outputDay.innerHTML = calculatedDay;
});
