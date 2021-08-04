
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId

export const UserSchema=new mongoose.Schema({
    id: { type: Number, required: true },
    name:{ type: mongoose.Schema.Types.String},
    mobile:{ type: Number,required:true},
    totalPrice:{ type: Number,required:true},
    carsRented:[{type: ObjectId, ref: 'CarsSchema'}]
})



 


