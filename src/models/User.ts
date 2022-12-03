import { Schema, model, connection } from "mongoose";

type UserType = {
   fullName: {
    firstName: string,
    middleName: string,
    lastName: string
   },
   email: string,
   age: number,
   interests: [string]
}
const schema = new Schema<UserType>({
   fullName: {
      firstName: {
         type: String,
         required: true
      },
      middleName: String,
      lastName: String,
   },
   email:{
      type: String,
      required: true
   },
   
   age: {
      type: Number,
      required: true
   },
   
   interests: [String]
});
  
const modelName: string = 'User';

export default (connection && connection.models[modelName])?
  connection.models[modelName]
  :
  model<UserType>(modelName.schema)
  :