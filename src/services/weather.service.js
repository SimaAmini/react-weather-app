const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_DAILY_URL =
  'https://api.openweathermap.org/data/2.5/forecast/daily';

export async function getWeather(city) {
  const response = await fetch(
    `${WEATHER_URL}?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
}

export async function getweekForcast(city, days = 7) {
  const response = await fetch(
    `${WEATHER_DAILY_URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&cnt=${days}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
}
