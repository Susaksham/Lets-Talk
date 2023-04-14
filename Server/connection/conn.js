import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { MongoMemoryServer } from "mongodb-memory-server";
const connect = async () => {
  try {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    const con = await mongoose.connect(process.env.URI, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    });
    console.log(`database connnected  ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

export default connect;
