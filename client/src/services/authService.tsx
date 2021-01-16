import axios from 'axios'

const jwt = 'Jwt'

export function setUpJWT(token: string) {
    localStorage.setItem(jwt, token);
    axios.defaults.headers.common["authorization"] = token;
}

export function doSignOut() {
    localStorage.removeItem(jwt);
}

export function isSignedIn() {
    return !!localStorage.getItem(jwt);
}
