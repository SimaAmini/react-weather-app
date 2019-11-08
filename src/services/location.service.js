const LOCATION_URL = 'https://ipinfo.io/geo';

export async function getLocation() {
  const response = await fetch(
    `${LOCATION_URL}?token=${process.env.REACT_APP_LOCATION_KEY}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
}
