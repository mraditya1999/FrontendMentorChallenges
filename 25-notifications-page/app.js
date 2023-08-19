const notifications = document.querySelectorAll('.notification');
const number = document.querySelector('#number');
const btn = document.querySelector('.read-btn');

btn.addEventListener('click', function () {
  notifications.forEach(function (notification) {
    if (notification.classList.contains('unread')) {
      notification.classList.remove('unread');
      number.innerHTML = 0;
    }
  });
});

window.addEventListener('DOMContentLoaded', function () {
  let count = 0;
  notifications.forEach(function (notification) {
    if (notification.classList.contains('unread')) {
      let notificationInfo = notification.querySelector('.notification-info p');
      const span = document.createElement('span');
      span.classList = 'dot';
      notificationInfo.appendChild(span);
      count++;
    }
  });

  if (count > 0) {
    number.innerHTML = count;
  }
});
