class AjaxWheather {
  constructor() {
    this.apiKey = "392efce16fe48ca8b41e87c4e4d3e696";
  }

  async wheather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
      this.apiKey
    }`;
    const weatherData = await fetch(url);
    const data = await weatherData.json();
    return data;
  }
}

class DisplayData {
  constructor() {
    this.results = document.querySelector(".results");
    this.cityName = document.getElementById("cityName");
    this.cityCountry = document.getElementById("cityCountry");
    this.cityIcon = document.getElementById("cityIcon");
    this.cityTemp = document.getElementById("cityTemp");
    this.cityHumidity = document.getElementById("cityHumidity");
  }
}

(function() {
  const wheatherForm = document.getElementById("wheatherForm");
  const cityInput = document.getElementById("cityInput");
  const feedback = document.querySelector(".feedback");

  const ajax = new AjaxWheather();

  wheatherForm.addEventListener("submit", e => {
    e.preventDefault();
    const city = cityInput.value;

    if (city.length === 0) {
      showFeedback("Please Enter Your City Name");
    } else {
      ajax.wheather(city).then(data => console.log(data));
    }
    $(document).ready(function() {
      $(".showItem").hide(12500);
    });
  });

  function showFeedback(text) {
    feedback.classList.add("showItem");
    feedback.innerHTML = `<p>${text}</p>`;
  }
  $(document).ready(function() {
    $(".showItem").hide(12500);
  });
})();
