const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');

const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('#month');
const inputDay = document.querySelector('#day');

const dayRegex = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
const monthRegex = /^(0?[1-9]|1[0-2])$/;
const yearRegex = /^(197\d|198\d|199\d|200\d|201\d|202[0-3])$/;

const form = document.querySelector('.form');

inputDay.addEventListener('input', () => {
  validateInput(inputDay, dayRegex, 'Must be a valid date (1-31)');
});

inputMonth.addEventListener('input', () => {
  validateInput(inputMonth, monthRegex, 'Must be a valid month (1-12)');
});

inputYear.addEventListener('input', () => {
  validateInput(inputYear, yearRegex, 'Must be a valid year (1970-2023)');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isDayValid = validateInput(
    inputDay,
    dayRegex,
    'Must be a valid date (1-31)'
  );
  const isMonthValid = validateInput(
    inputMonth,
    monthRegex,
    'Must be a valid month (1-12)'
  );
  const isYearValid = validateInput(
    inputYear,
    yearRegex,
    'Must be a valid year (1970-2023)'
  );

  const isAnyFieldEmpty =
    inputDay.value === '' || inputMonth.value === '' || inputYear.value === '';

  if (!isDayValid || !isMonthValid || !isYearValid || isAnyFieldEmpty) {
    return;
  }

  const iMonth = parseInt(inputMonth.value) - 1;
  const iYear = parseInt(inputYear.value);
  const iDate = parseInt(inputDay.value);

  const previousDate = new Date(iYear, iMonth, iDate);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - previousDate;
  const ageDate = new Date(ageInMilliseconds);

  const calculatedYear = ageDate.getUTCFullYear() - 1970;
  const calculatedMonth = ageDate.getUTCMonth();
  const calculatedDay = ageDate.getUTCDate() - 1;

  outputYear.innerHTML = calculatedYear;
  outputMonth.innerHTML = calculatedMonth;
  outputDay.innerHTML = calculatedDay;
});

function validateInput(inputElement, regex, errorMessage) {
  const inputValue = inputElement ? inputElement.value.trim() : '';
  const parent = inputElement ? inputElement.parentElement.parentElement : null;
  const nextSibling = inputElement ? inputElement.nextElementSibling : null;

  if (!parent || !nextSibling) {
    return false;
  }

  if (inputValue === '') {
    showError(parent, nextSibling, 'This field is required');
    return false;
  } else if (!regex.test(inputValue)) {
    showError(parent, nextSibling, errorMessage);
    return false;
  } else {
    hideError(parent, nextSibling);
    return true;
  }
}

function showError(parent, nextSibling, message) {
  if (!parent || !nextSibling) {
    return;
  }

  parent.classList.add('active');
  nextSibling.innerHTML = message;
}

function hideError(parent, nextSibling) {
  if (!parent || !nextSibling) {
    return;
  }

  parent.classList.remove('active');
  nextSibling.innerHTML = '';
}
