# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot

[![Design preview for the FAQ accordion card coding challenge](./design/desktop-preview.jpg)](https://fm-23-faq-accordion.netlify.app)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/faq-accordion-RX4y8go4-H)
- [Live Site URL](https://fm-23-faq-accordion.netlify.app)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow

### What I learned

Throughout this challenge, I acquired the skill set necessary to construct an accordion component and adeptly manipulate the Document Object Model (DOM) in alignment with its functionality. Furthermore, I proficiently implemented a seamless transition effect, enhancing the user experience, during the process of expanding and collapsing said accordion elements.

```html
<div class="accordion-text-wrapper">
  <div class="accordion-text">
    <p>
      You can invite up to 2 additional users on the Free plan. There is no
      limit on team members for the Premium plan.
    </p>
  </div>
</div>
```

```css
.accordion-text-wrapper {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
}
```

```js
let accordionTextWrapper = e.currentTarget.lastElementChild;
if (accordionTextWrapperHeight === 0) {
  accordionTextWrapper.style.height = `${accordionTextHeight}px`;
  accordion.classList.add('active');
} else {
  accordionTextWrapper.style.height = 0;
  accordion.classList.remove('active');
}
```

### Continued development

I have successfully completed the challenge however, I am uncertain about the proper procedure for positioning its corresponding image optimally. This aspect requires my dedicated attention and a focused learning effort.

## Author

- Website - [@mraditya1999](https://www.adityayadav.live)
- Twitter - [@mraditya1999](https://twitter.com/mraditya1999)
- Linkedin - [@mraditya1999](https://www.linkedin.com/in/mraditya1999/)
- Frontend Mentor - [@mraditya1999](https://www.frontendmentor.io/profile/Aditya-oss-creator)
