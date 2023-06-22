export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "dee0ec99a7msh93670e5bfec89b7p180020jsnc958afefe424",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }
  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const result = await response.json();
  return result;
}
