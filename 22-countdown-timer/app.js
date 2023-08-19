const span = document.querySelectorAll('span');
const blockContainer = document.querySelectorAll('.block-container');

// Time In ms
const msInOneDay = 24 * 60 * 60 * 1000;
const msInOneHour = 60 * 60 * 1000;
const msInOneMinute = 60 * 1000;

// Temp Date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureTime = new Date(
  tempYear,
  tempMonth,
  tempDay + 10,
  11,
  30,
  0
).getTime();
//   const futureTime = new Date(2023, 6, 31, 21, 12).getTime();

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const giveAwayEndsTime = futureTime - currentTime;

  const daysLeft = Math.floor(giveAwayEndsTime / msInOneDay);
  const hoursLeft = Math.floor((giveAwayEndsTime % msInOneDay) / msInOneHour);
  const minutesLeft = Math.floor(
    (giveAwayEndsTime % msInOneHour) / msInOneMinute
  );
  const secondsLeft = Math.floor((giveAwayEndsTime % msInOneMinute) / 1000);

  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  function format(value) {
    if (value < 10) return (value = `0${value}`);
    return `${value}`;
  }

  span.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (giveAwayEndsTime < 0) {
    clearInterval(TimeoutId);
    blockContainer.innerHTML = `<h4 class="expired">Sorry, this giveaway is expired</h4>`;
  }
}

const TimeoutId = setInterval(getRemainingTime, 1000);
getRemainingTime();
