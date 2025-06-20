export function getTokenLocalStorage() {
    return localStorage.getItem('token')
}

export function setTokenLocalStorage(accessToken: string) {
    localStorage.setItem('token', accessToken)
}