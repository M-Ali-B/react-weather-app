export const FahrenheitToCelsius = (f) => {
    return Math.round((f - 32) * 5 / 9);
}

export const  kelvinToCelsius = (k) => {
  return Math.round(k - 273.15);
}