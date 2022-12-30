import mongoose from 'mongoose'
export async function connectToDb (){
    try {
      
      mongoose.set('strictQuery', true);
      await mongoose.connect(process.env.MONGODB_URL||"");
      console.log("Connected to MongoDB!");
    } catch (e) {
      console.log("something went wrong with db");
    }
}






// export{}