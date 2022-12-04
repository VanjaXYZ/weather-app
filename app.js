const api = "c502ec3abc8bf6f30c6b4ffda68609ae";
let input = document.getElementById("userInput");
let city = document.getElementById("city");
let temperature = document.getElementById("temp");
let weatherType = document.getElementById("weather");
let iconType = document.getElementById("iconImg");

const getBtn = document.getElementById("get-data");

getBtn.addEventListener("click", getData);

function getData() {
  let base = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api}&units=metric`;
  console.log(base);

  fetch(base)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (input.value === "" || !data.name) {
        city.textContent = "Make a valid input";
        temperature.textContent = "";
        weatherType.textContent = "";
      } else {
        city.textContent = data.name;
        let { temp } = data.main;
        temperature.textContent = `${temp.toFixed(0)}°C`;
        let { main, icon } = data.weather[0];
        weatherType.textContent = `${main}`;
        input.value = "";
        input.focus();
      }
    });
}
