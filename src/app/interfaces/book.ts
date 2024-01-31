export interface IBook {
    id: number,
    title: string,
    author: string,
}

export interface IAddBook {
    title: string,
    author: string,
}

export interface IUser {
    user: string,
    password: string,
}


export interface IRegUser {
    name: string,
    email: string,
    password: string,
}