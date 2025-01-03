import mongoose from 'mongoose'

export const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }
    try {
        const response = await mongoose.connect(process.env.MONGOURL as string);
        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
};