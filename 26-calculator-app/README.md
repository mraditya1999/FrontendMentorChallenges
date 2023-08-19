# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot

[![Design preview for the Calculator app coding challenge](./design/desktop-preview.jpg)](https://26-calculator-app.netlify.app)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/calculator-app-Ko2LulgLbM)
- [Live Site URL](https://26-calculator-app.netlify.app)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```js
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
```

### Continued development

Practice breaking down complex problems into smaller, manageable steps for clearer logical progression.

## Author

- Website - [@mraditya1999](https://www.adityayadav.live)
- Twitter - [@mraditya1999](https://twitter.com/mraditya1999)
- Linkedin - [@mraditya1999](https://www.linkedin.com/in/mraditya1999/)
- Frontend Mentor - [@mraditya1999](https://www.frontendmentor.io/profile/Aditya-oss-creator)
