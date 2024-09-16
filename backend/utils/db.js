import mongoose from 'mongoose'

const connectDb = async ()=>{
    try {
        console.log("mongoDb connected suceesfully ");
        
    } catch (error) {
        console.log(error);

    }
}

export default connectDb;