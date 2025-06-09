const app = 'Clock';
const VISITS_KEY = 'clock-visits';

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const setClock = e => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  document.querySelector(".date").textContent = now.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  document.querySelector(".time").textContent = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  // document.querySelector(".day-circle").innerHTML = `<span>${now.toLocaleString("en-US", {
  //   weekday: "long"
  // })}</span>`;

  // const day = now.toLocaleString("en-US", { weekday: "long" });
  // const circle = document.querySelector(".day-circle");
  // circle.innerHTML = "";
  // const angleStep = 360 / day.length;
  // [...day].forEach((char, index) => {
  //   const span = document.createElement("span");
  //   span.innerText = char;
  //   const angle = angleStep * index;
  //   span.style.transform = `rotate(${angle}deg)`;
  //   circle.appendChild(span);
  // });

  const day = now.toLocaleString("en-US", { weekday: "long" });
  const circle = document.querySelector(".day-circle");
  circle.innerHTML = "";
  const radius = 40;
  const angleStep = 360 / day.length;
  [...day].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    const angle = angleStep * index;
    span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;
    circle.appendChild(span);
  });

}

// trackVisitor();

setInterval(setClock, 1000);

setClock();

document.querySelector(".clock").style.display = "inline-block";
