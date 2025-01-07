/*

import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('{ Add your mongodb URI Here }/food-del').then(()=>console.log("DB Connected"));
   
}
*/

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.


import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/';

export const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully to the database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

// Example of how to use connectDB
// connectDB();

export default connectDB;
