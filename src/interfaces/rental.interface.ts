import {Document,ObjectId} from 'mongoose'

export interface IRental extends Document{
    readonly car: ObjectId,
    readonly user: ObjectId,
    readonly duration: number,
    readonly dateTimeFrom:Date, 
    readonly dateTimeto:Date,
    readonly totalPrice:number
}

