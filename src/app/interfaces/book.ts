export interface IBook {
    id: string,
    userId: string,
    name: string,
    author: string,
}

export interface IAddBook {
    name: string,
    author: string,
}

export interface IUser {
    email: string,
    password: string,
}

export interface IRegUser {
    name: string,
    email: string,
    password: string,
}