import { Link } from 'react-router-dom';
export type ItemProduct = {
    category:string ,
    createdAt:string ,
    description: string,
    id: number ,
    imageUrl:string ,
    name: string ,
    price: number ,
    stock: number ,
    updatedAt:string ,
    weight: string
    quantity?: number | undefined
}

export interface ICities {
    id:number ,
    name: string ,
    Link: string ,
}

export interface IRegisterationUser {
    name: string ,
    email: string ,
    password: string
}