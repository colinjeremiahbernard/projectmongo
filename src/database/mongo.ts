import { connect } from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

export const mongoConnect = async() => {
  try {
     console.log("connect to MongoDB...");
     await connect(process.env.MONGO_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     });
     console.log("MongoDB connected successfully.");
  } catch (err) { 
      console.log("Erro Conexao MongoDB: ", err);
  }
}