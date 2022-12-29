import mongoose from 'mongoose'
export async function connectToDb (){
    try {
      
      mongoose.set('strictQuery', true);
      await mongoose.connect(process.env.MONGODB_URL||"mongodb://mongo:MongoSushant0324@ac-avzb160-shard-00-00.neqduj8.mongodb.net:27017,ac-avzb160-shard-00-01.neqduj8.mongodb.net:27017,ac-avzb160-shard-00-02.neqduj8.mongodb.net:27017/coupon?ssl=true&replicaSet=atlas-t46owy-shard-0&authSource=admin&retryWrites=true&w=majority");
      console.log("Connected to MongoDB!");
    } catch (e) {
      console.log("something went wrong with db");
    }
}






// export{}