// calling openWhether api directy from browser i.e: from frontend to openWhether Api    - this works b/c openWheher allowed  CORS policy and that is b/c there is no security issue on getting the whether data.
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "<p>⚠️ Please enter a city name.</p>";
    return;
  }

  const apiKey = "YOUR_API_KEY_HERE";       // replace this with your APi key
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  if (data.error) {
    resultDiv.innerHTML = `<p>❌ ${data.error}</p>`;
  } else {
    resultDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p> country: ${data.sys.country}%</p> 
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>🌧️ Condition: ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💧 pressure: ${data.main.pressure}%</p>   
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"   alt="Weather icon"/>
        `;
  }
}








