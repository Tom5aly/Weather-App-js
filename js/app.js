class AjaxWeather {
  constructor() {
    this.apiKey = "392efce16fe48ca8b41e87c4e4d3e696";
  }

  async getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
      this.apiKey
    }&units=metric`;
    const weatherData = await fetch(url);
    const data = await weatherData.json();
    return data;
  }
}

class DisplayData {
  constructor() {
    this.results = document.querySelector(".results");
    this.cityName = document.getElementById("cityName");
    this.country = document.getElementById("country");
    this.cityTemp = document.getElementById("cityTemp");
    this.cityHumidity = document.getElementById("cityHumidity");
  }
  showWeather(data) {
    // console.log(data);

    const {
      name,
      sys: { country },
      main: { temp, humidity }
    } = data;

    this.results.classList.add("showItem");
    this.cityName.textContent = name;
    this.country.textContent = country;
    this.cityTemp.textContent = temp;
    this.cityHumidity.textContent = humidity;
  }
}

(function() {
  const weatherForm = document.getElementById("weatherForm");
  const cityInput = document.getElementById("cityInput");
  const feedback = document.querySelector(".feedback");

  const ajax = new AjaxWeather();
  const display = new DisplayData();

  weatherForm.addEventListener("submit", e => {
    e.preventDefault();
    const city = cityInput.value;

    if (city.length === 0) {
      alert("Please Enter Your City Name");
    } else {
      ajax.getWeather(city).then(data => display.showWeather(data));
    }
  });
})();
