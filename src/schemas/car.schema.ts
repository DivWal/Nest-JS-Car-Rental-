import * as mongoose from 'mongoose';

export const CarsSchema=new mongoose.Schema({
    carLicenseNumber:{ type: mongoose.Schema.Types.String, required: true },
    manufacturer:{ type: mongoose.Schema.Types.String, required: true },
    carModel:{ type: mongoose.Schema.Types.String, required: true },
    basePrice:{ type: Number, required: true },
    PPH:{ type:Number, required: true },
    securityDeposit:{ type: Number, required: true },
    dateTimeFrom:{ type: Date, required: true }, 
    dateTimeto:{ type: Date, required: true },
    isBooked: {type: Boolean, required: true, default: false}

    // adding comment
})


