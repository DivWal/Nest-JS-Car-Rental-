import * as mongoose from 'mongoose';
// const User = require('mongoose').model('User');
// const Car = require('mongoose').model('Car');
const ObjectId = mongoose.Schema.Types.ObjectId


export const RentalSchema=new mongoose.Schema({
    car: { type: ObjectId, required: true, ref: 'CarsSchema' },
    user: { type: ObjectId, required: true, ref: 'UserSchema' },
    duration: { type: Number, required: true },
    dateTimeFrom:{ type: Date, required: true }, 
    dateTimeto:{ type: Date, required: true },
    totalPrice:{ type: Number, required: true }, 
})