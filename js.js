let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Suturday"
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  let date = document.querySelector("#date");
  date.innerHTML = `${day} ${hour}:${minute}`;
  
  function newCity(event) {
    let mainCity = document.querySelector("h2");
    mainCity.innerHTML = `${currentCity.value}`;
  }
  let currentCity = document.querySelector("#city");
  currentCity.addEventListener("input", newCity);

  function farenTemp(event) {
    event.preventDefault();
    let newTemp = document.querySelector("span");
    newTemp.innerHTML = 68;
  }
  function celcTemp(event) {
    event.preventDefault();
    let newCelcTemp = document.querySelector("span");
    newCelcTemp.innerHTML = 18;
  }
  let farenheit = document.querySelector("#faren");
  let celc = document.querySelector("#celcium");
  farenheit.addEventListener("click", farenTemp);
  celc.addEventListener("click", celcTemp); 