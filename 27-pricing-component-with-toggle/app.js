const annually = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99'];
const monthly = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99'];
const btn = document.querySelector('.inner');
const pricings = document.querySelectorAll('.pricing');

btn.addEventListener('click', (e) => {
  if (!btn.classList.contains('active')) {
    btn.classList.add('active');
    displayData(pricings, monthly);
  } else {
    btn.classList.remove('active');
    displayData(pricings, annually);
  }
});

function displayData(pricings, data) {
  pricings.forEach((pricing, index) => {
    pricing.innerHTML = data[index];
  });
}
