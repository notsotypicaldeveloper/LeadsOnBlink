import mongoose from 'mongoose';

const url = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.lokdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log("url = ", url);


mongoose.connect(url)
  .then(() => 
    console.log('Connected!')).catch(()=> {
    console.log('failed')
  })

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


export const userCollection = mongoose.model("userCollection", newSchema);

