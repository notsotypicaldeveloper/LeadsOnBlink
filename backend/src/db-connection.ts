import mongoose from 'mongoose';

const URI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.lokdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


export const connectDb = async()=> {
  try {
    mongoose.connect(URI)
    console
  }
  catch(error) {
    console.error("database connection error");
    process.exit(0);

  }
}




