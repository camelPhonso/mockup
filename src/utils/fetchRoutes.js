export default async function fetchRoutes() {
  const url =
    // "https://occupational-maps-api.instituteforapprenticeships.org/api/v1/Routes"
    "https://cors-anywhere.herokuapp.com/https://occupational-maps-api.instituteforapprenticeships.org/api/v1/Routes"
  const options = {
    method: "GET",
    // mode: "no-cors",
    headers: {
      "X-API-KEY": process.env.MAP_KEY,
      Accept: "application/json",
    },
  }

  try {
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(`Error fetching Routes: ${error}`)
    throw error
  }
}
