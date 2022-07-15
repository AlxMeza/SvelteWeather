export async function getWeatherFrom(query = 'Mexico'){
    return fetch(`/api/get-weather?q=${query}`).then(res => res.json());
}