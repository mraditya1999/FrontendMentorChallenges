# Frontend Mentor - Chat app CSS illustration solution

This is a solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot

[![Design preview for the Chat app CSS illustration coding challenge](./design/desktop-preview.jpg)](https://fm-18-chat-app-css-illustration.netlify.app)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/chat-app-illustration-h4jWfZL-CR)
- [Live Site URL](https://fm-18-chat-app-css-illustration.netlify.app)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid Layout
- Mobile-first workflow

### What I learned

I successfully implemented a complex linear gradient for the background, demonstrating my proficiency in UI design. Furthermore, I have acquired a solid understanding of the intricacies involved in crafting user interfaces for mobile chat applications.

```html
<div class="background"></div>
<div class="background-2"></div>
```

```css
.background {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  height: 70vh;
  width: 50vw;
  transform: translateX(-20%);
  border-bottom-left-radius: 40rem;
  border-bottom-right-radius: 40rem;
  background: linear-gradient(to left, var(--violet), var(--magenta));
}

.background-2 {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 80vh;
  width: 40vw;
  transform: translateX(40%);
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
  background: var(--placeholder);
  opacity: 0.1;
}
```

## Author

- Website - [@mraditya1999](https://www.adityayadav.live)
- Twitter - [@mraditya1999](https://twitter.com/mraditya1999)
- Linkedin - [@mraditya1999](https://www.linkedin.com/in/mraditya1999/)
- Frontend Mentor - [@mraditya1999](https://www.frontendmentor.io/profile/Aditya-oss-creator)
