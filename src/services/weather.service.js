const WEATHER_FORECAST_URL = 'https://api.darksky.net/forecast/';

export async function getweekForcast(coord) {
  const response = await fetch(
    `${WEATHER_FORECAST_URL}${process.env.REACT_APP_DARK_SKY_KEY}/${coord}?exclude=minutely,hourly,alerts,flags&units=si`
  );

  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
}
