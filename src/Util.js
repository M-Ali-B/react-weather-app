export const FahrenheitToCelsius = (f) => {
    return Math.round((f - 32) * 5 / 9);
}

export const  kelvinToCelsius = (k) => {
  return Math.round(k - 273.15);
}

export const ForecastProps = (data) => {
  console.log('props',data)
return {
  icon: data.weather[0]?.icon,
  main: data.weather[0]?.main,
  name: data.name,
  feels_like: kelvinToCelsius(data.main?.feels_like),
  temp: kelvinToCelsius(data.main?.temp),
  description: data.weather[0]?.description,
  speed: data.wind?.speed
}
}