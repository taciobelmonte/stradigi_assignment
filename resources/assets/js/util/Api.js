//API to request data via HTTP
const ROOT = "http://api.giphy.com/v1/gifs/trending?api_key=sswps9dkU0xxsI8vTgZTHv17rjko3NnX&limit=15";

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
};

export const getInfo = (url) =>
    fetch(`${url}`, { headers })
        .then(res => res.json())
        .then(data => data);