import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    logo: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },


},{timestamps})

export const Comapany = mongoose.model("Company", companySchema)