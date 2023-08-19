const btns = document.querySelectorAll('.btn');
const formInput = document.querySelector('.form-input');
const inner = document.querySelector('.inner');

inner.addEventListener('click', function () {
  if (document.body.classList.contains('theme-1')) {
    document.body.className = 'theme-2';
  } else if (document.body.classList.contains('theme-2')) {
    document.body.className = 'theme-3';
  } else {
    document.body.className = 'theme-1';
  }
});

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const reset = e.currentTarget.textContent;
    const del = e.currentTarget.textContent;
    const result = e.currentTarget.textContent;

    try {
      if (reset === 'RESET') {
        formInput.value = '';
      } else if (del === 'DEL') {
        formInput.value = formInput.value.slice(0, -1);
      } else if (result === '=') {
        formInput.value =
          Math.round((eval(formInput.value) + Number.EPSILON) * 100) / 100;
      } else {
        formInput.value += e.currentTarget.textContent;
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
});
