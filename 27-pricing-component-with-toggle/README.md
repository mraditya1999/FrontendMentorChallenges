# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot

[![Design preview for the Pricing component with toggle coding challenge](./design/desktop-preview.jpg)](https://fm-27-pricing-component-with-toggle.netlify.app)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/calculator-app-Ko2LulgLbM)
- [Live Site URL](https://fm-27-pricing-component-with-toggle.netlify.app)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow

### What I learned

In the course of this challenge, I have acquired a comprehensive understanding of toggle switch mechanisms, enabling me to proficiently modify and present data in accordance with its state transitions.

```js
const annually = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99'];
const monthly = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99'];
const pricings = document.querySelectorAll('.pricing');

function displayData(pricings, data) {
  pricings.forEach((pricing, index) => {
    pricing.innerHTML = data[index];
  });
}
```

## Author

- Website - [@mraditya1999](https://www.adityayadav.live)
- Twitter - [@mraditya1999](https://twitter.com/mraditya1999)
- Linkedin - [@mraditya1999](https://www.linkedin.com/in/mraditya1999/)
- Frontend Mentor - [@mraditya1999](https://www.frontendmentor.io/profile/Aditya-oss-creator)
