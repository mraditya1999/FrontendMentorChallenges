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
    const textContent = e.currentTarget.textContent;

    try {
      if (textContent === 'RESET') {
        formInput.value = '';
      } else if (textContent === 'DEL') {
        formInput.value = formInput.value.slice(0, -1);
      } else if (textContent === '=') {
        try {
          const result = eval(formInput.value);
          if (isNaN(result) || !isFinite(result)) {
            formInput.value = 'invalid Expression';
          } else {
            var resultString = result.toLocaleString('en-IN');
            resultString = resultString.replace(/\.?0+$/, '');
            formInput.value = resultString;
          }
        } catch (error) {
          formInput.value = 'invalid Expression';
          console.log(error);
        }
      } else {
        formInput.value += textContent;
      }
    } catch (error) {
      formInput.value = 'Error';
      console.error('An error occurred:', error);
    }
  });
});

// Keyboard support (optional)
document.addEventListener('keydown', function (e) {
  const key = e.key;
  const allowedKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '+',
    '-',
    '*',
    '/',
  ];

  if (allowedKeys.includes(key)) {
    formInput.value += key;
  } else if (key === 'Enter') {
    // Handle the Enter key as the equals sign
    e.preventDefault(); // Prevent form submission if this is inside a form
  } else if (key === 'Backspace') {
    formInput.value = formInput.value.slice(0, -1);
  }
});
