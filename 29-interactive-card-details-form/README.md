# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot

[![Design preview for the Interactive card details form coding challenge](./design/desktop-preview.jpg)](https://fm-29-interactive-card-details-form.netlify.app)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/interactive-card-details-form-izltW3Oga0)
- [Live Site URL](https://fm-29-interactive-card-details-form.netlify.app)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In the preceding segment, I acquired knowledge encompassing card validation, frontend error handling, and the manipulation of the Document Object Model (DOM).

```js
function showError(element, message) {
  element.nextElementSibling.textContent = message;
  element.nextElementSibling.classList.add('active');
}

function hideError(element) {
  element.nextElementSibling.textContent = '';
  element.nextElementSibling.classList.remove('active');
}
```

### Continued development

I have successfully concluded the task; however, there exists a noticeable redundancy within the code that necessitates refactoring. I am now sufficiently poised and confident to proceed with the refactoring process.

## Author

- Website - [@mraditya1999](https://www.adityayadav.live)
- Twitter - [@mraditya1999](https://twitter.com/mraditya1999)
- Linkedin - [@mraditya1999](https://www.linkedin.com/in/mraditya1999/)
- Frontend Mentor - [@mraditya1999](https://www.frontendmentor.io/profile/Aditya-oss-creator)
