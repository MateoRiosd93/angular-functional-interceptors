export interface UserState {
    accessToken: string
    username: string
    email: string
    gender: string
    image: string
}

export const initialUserState: UserState = {
    accessToken: '',
    username: '',
    email: '',
    gender: '',
    image: ''
}