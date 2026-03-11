const cities = [
    { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
    { name: "Delhi", lat: 28.6139, lon: 77.2090 },
    { name: "Bangalore", lat: 12.9716, lon: 77.5946 }
];

const weatherCodeMap = {
    0: { condition: "Clear sky", emoji: "☀️" },
    1: { condition: "Mainly clear", emoji: "🌤️" },
    2: { condition: "Partly cloudy", emoji: "⛅" },
    3: { condition: "Overcast", emoji: "☁️" },
    45: { condition: "Fog", emoji: "🌫️" },
    48: { condition: "Depositing rime fog", emoji: "🌫️" },
    51: { condition: "Light drizzle", emoji: "🌧️" },
    53: { condition: "Moderate drizzle", emoji: "🌧️" },
    55: { condition: "Dense drizzle", emoji: "🌧️" },
    56: { condition: "Light freezing drizzle", emoji: "🌧️❄️" },
    57: { condition: "Dense freezing drizzle", emoji: "🌧️❄️" },
    61: { condition: "Slight rain", emoji: "🌧️" },
    63: { condition: "Moderate rain", emoji: "🌧️" },
    65: { condition: "Heavy rain", emoji: "🌧️" },
    66: { condition: "Light freezing rain", emoji: "🌧️❄️" },
    67: { condition: "Heavy freezing rain", emoji: "🌧️❄️" },
    71: { condition: "Slight snow fall", emoji: "❄️" },
    73: { condition: "Moderate snow fall", emoji: "❄️" },
    75: { condition: "Heavy snow fall", emoji: "❄️" },
    77: { condition: "Snow grains", emoji: "❄️" },
    80: { condition: "Slight rain showers", emoji: "🌦️" },
    81: { condition: "Moderate rain showers", emoji: "🌧️" },
    82: { condition: "Violent rain showers", emoji: "⛈️" },
    85: { condition: "Slight snow showers", emoji: "🌨️" },
    86: { condition: "Heavy snow showers", emoji: "❄️" },
    95: { condition: "Thunderstorm", emoji: "⛈️" },
    96: { condition: "Thunderstorm with slight hail", emoji: "⛈️🌨️" },
    99: { condition: "Thunderstorm with heavy hail", emoji: "⛈️🌨️" }
};

const loaderEl = document.getElementById("loader");
const errorContainerEl = document.getElementById("error-container");
const errorMessageEl = document.getElementById("error-message");
const weatherCardsEl = document.getElementById("weather-cards");
const retryBtn = document.getElementById("retry-btn");

function getConditionInfo(code) {
    return weatherCodeMap[code] || { condition: "Unknown", emoji: "🌍" };
}

function createWeatherCard(city, weatherData) {
    const { temperature, weathercode } = weatherData;
    const { condition, emoji } = getConditionInfo(weathercode);

    const card = document.createElement("div");
    card.className = "weather-card";

    card.innerHTML = `
        <h2 class="city-name">${city.name}</h2>
        <div class="weather-emoji">${emoji}</div>
        <div class="temperature">${Math.round(temperature)}°C</div>
        <div class="weather-condition">${condition}</div>
    `;

    return card;
}

async function fetchWeatherData() {
    // Reset UI state
    loaderEl.classList.remove("hidden");
    errorContainerEl.classList.add("hidden");
    weatherCardsEl.classList.add("hidden");
    weatherCardsEl.innerHTML = "";

    try {
        const fetchPromises = cities.map(city => {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
            return fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            }).then(data => ({
                city,
                weatherData: data.current_weather
            }));
        });

        // Use Promise.all to fetch simultaneously as requested
        const results = await Promise.all(fetchPromises);

        results.forEach(result => {
            const card = createWeatherCard(result.city, result.weatherData);
            weatherCardsEl.appendChild(card);
        });

        // Hide loader, show cards
        loaderEl.classList.add("hidden");
        weatherCardsEl.classList.remove("hidden");

    } catch (error) {
        console.error("Error fetching weather:", error);
        loaderEl.classList.add("hidden");
        errorContainerEl.classList.remove("hidden");
        errorMessageEl.textContent = `Failed to load weather data (${error.message}). Please try again later.`;
    }
}

retryBtn.addEventListener("click", fetchWeatherData);

// Initial fetch
document.addEventListener("DOMContentLoaded", fetchWeatherData);
