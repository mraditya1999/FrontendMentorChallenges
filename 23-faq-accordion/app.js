const accordions = document.querySelectorAll('.accordion');

// const questionTextHeight = questionText[0].getBoundingClientRect().height;

// questions.forEach(function (question) {
//   question.addEventListener('click', function (e) {
//
// textWrapper.forEach(function (item) {
//       item.style.height = 0;
//       item.previousElementSibling.classList.remove('active');
//     });

//     const tw = e.currentTarget.nextElementSibling;

//     if (tw.offsetHeight === 0) {
//       tw.style.height = `${questionTextHeight}px`;
//       e.currentTarget.classList.add('active');
//     } else {
//       tw.style.height = 0;
//       e.currentTarget.classList.remove('active');
//     }
//   });
// });

accordions.forEach(function (accordion) {
  accordion.addEventListener('click', function (e) {
    let accordionTextWrapper = e.currentTarget.lastElementChild;
    let accordionText = accordionTextWrapper.querySelector('.accordion-text');
    let accordionTextHeight = accordionText.getBoundingClientRect().height;
    let accordionTextWrapperHeight = accordionTextWrapper.offsetHeight;

    accordions.forEach(function (item) {
      item.lastElementChild.style.height = 0;
      item.classList.remove('active');
    });

    if (accordionTextWrapperHeight === 0) {
      accordionTextWrapper.style.height = `${accordionTextHeight}px`;
      accordion.classList.add('active');
    } else {
      accordionTextWrapper.style.height = 0;
      accordion.classList.remove('active');
    }
  });
});
