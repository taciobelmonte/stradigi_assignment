//API to request data via HTTP
import 'whatwg-fetch';

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