export const getTokenLocalStorage = () => {
    return localStorage.getItem('token')
}

export const setTokenLocalStorage = (accessToken: string) => {
    localStorage.setItem('token', accessToken)
}