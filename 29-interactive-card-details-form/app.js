const form = document.querySelector('.form');
const thankYou = document.querySelector('.thank-you');
const bacnkBtn = document.querySelector('.back-btn');

const cardName = document.querySelector('#card-name');
const cardNumber = document.querySelector('#card-number');
const cardMonth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
const cardCVC = document.querySelector('#card-cvc');

const cardNumberDOM = document.querySelector('.number');
const cardNameDOM = document.querySelector('.name');
const cardExpiryDOM = document.querySelector('.expiry');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const a = validateName();
  const b = validateCardNumber();
  const c = validateCardMonth();
  const d = validateCardYear();
  const ee = validateCardCVC();

  if (a && b && c && d && ee) {
    form.classList.remove('active');
    thankYou.classList.add('active');

    cardNumberDOM.innerHTML = cardNumber.value;
    cardNameDOM.innerHTML = cardName.value;
    cardExpiryDOM.innerHTML = `${cardMonth.value}/${cardYear.value}`;

    cardName.value = '';
    cardNumber.value = '';
    cardMonth.value = '';
    cardYear.value = '';
    cardCVC.value = '';
  }

  bacnkBtn.addEventListener('click', function () {
    form.classList.add('active');
    thankYou.classList.remove('active');

    cardNumberDOM.innerHTML = '0000 0000 0000 0000';
    cardNameDOM.innerHTML = 'Jane Appleseed';
    cardExpiryDOM.innerHTML = `00/00`;
  });
});

function validateName() {
  if (cardName.value !== null && cardName.value !== '') {
    if (cardName.value.length < 3) {
      showError(cardName, 'Name must be at least 3 characters');
    } else {
      hideError(cardName);
      return true;
    }
  } else if (cardName.value === '') {
    showError(cardName, `Can't be blank`);
  } else {
    hideError(cardName);
    return true;
  }
  return false;
}

function validateCardNumber() {
  if (cardNumber.value !== null && cardNumber.value !== '') {
    const value = cardNumber.value;
    if (isNaN(value)) {
      showError(cardNumber, 'Wrong format, numbers only!');
    } else if (cardNumber.value.length !== 16) {
      showError(cardNumber, 'Card number must be of 16 characters');
    } else {
      hideError(cardNumber);
      return true;
    }
  } else if (cardNumber.value === '') {
    showError(cardNumber, `Can't be blank`);
  } else {
    hideError(cardNumber);
    return true;
  }
  return false;
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

function validateCardMonth() {
  if (cardMonth !== null && cardMonth.value !== '') {
    value = parseInt(cardMonth.value);
    if (isNaN(value)) {
      showError(cardMonth, 'Wrong format, numbers only!');
    } else if (value < 1 || value > 12) {
      showError(cardMonth, 'Invalid Month');
    } else {
      hideError(cardMonth);
      return true;
    }
  } else if (cardMonth.value === '') {
    showError(cardMonth, `Can't be blank`);
  } else {
    hideError(cardMonth);
    return true;
  }
  return false;
}

function validateCardYear() {
  if (cardYear !== null && cardMonth.value !== '') {
    const value = parseInt(cardYear.value);
    if (isNaN(value)) {
      showError(cardYear, 'Wrong format, numbers only!');
    } else if (value < currentYear) {
      showError(cardYear, 'Your card has been expired');
    } else {
      hideError(cardYear);
      return true;
    }
  } else if (cardYear.value === '') {
    showError(cardYear, `Can't be blank`);
  } else {
    hideError(cardYear);
    return true;
  }
  return false;
}

function validateCardCVC() {
  if (cardCVC !== null && cardMonth.value !== '') {
    const value = parseInt(cardCVC.value);
    if (isNaN(value)) {
      showError(cardCVC, 'Wrong format, numbers only!');
    } else if (value < 100 || value > 999) {
      showError(cardCVC, 'CVC must be a 3 characters');
    } else {
      hideError(cardCVC);
      return true;
    }
  } else if (cardCVC.value === '') {
    showError(cardCVC, `Can't be blank`);
  } else {
    hideError(cardCVC);
    return true;
  }
  return false;
}

function showError(element, message) {
  element.nextElementSibling.textContent = message;
  element.nextElementSibling.classList.add('active');
}

function hideError(element) {
  element.nextElementSibling.textContent = '';
  element.nextElementSibling.classList.remove('active');
}
