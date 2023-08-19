const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');
const rates = document.querySelectorAll('.btn');
const submitBtn = document.getElementById('submit');
const rating = document.getElementById('rating');
const rateAgain = document.getElementById('rate-again');

submitBtn.addEventListener('click', function () {
  thanksContainer.classList.remove('hidden');
  mainContainer.style.display = 'none';
});

rateAgain.addEventListener('click', function () {
  thanksContainer.classList.add('hidden');
  mainContainer.style.display = 'block';
});

rates.forEach((rate) => {
  rate.addEventListener('click', function () {
    rating.innerHTML = rate.innerHTML;
  });
});
