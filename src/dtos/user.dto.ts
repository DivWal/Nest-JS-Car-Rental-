import {Types } from 'mongoose';

export class UserDto{
    readonly id:number;
    readonly name:string;
    readonly mobile:number;
    readonly totalPrice:number;
    readonly carsRented:Types.ObjectId;
}