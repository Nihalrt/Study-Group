import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

// interface MongooseGlobal extends NodeJS.Global{

// }

if(!MONGODB_URL){
    throw new Error("Please attach the MongoDB url from the website")
}

let mongooseConnection: mongoose.Connection | null = null;
let mongoosePromise: Promise<mongoose.Connection> | null = null;

async function connectToDatabase(){
    if(mongooseConnection){
        return mongooseConnection
    }
    if (mongoosePromise){
        mongooseConnection = await mongoosePromise;
        return mongooseConnection
    }

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'StudyGroupApp'
    }
}