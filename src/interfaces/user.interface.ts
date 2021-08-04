import {Document,ObjectId} from 'mongoose'

export interface IUser extends Document{
    readonly id:number;
    readonly name:string;
    readonly mobile:number;
    readonly totalPrice:number;
    readonly carsRented:ObjectId
}