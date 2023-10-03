import mongoose, {model,mongo,Schema} from "mongoose";

//defining ROLE MODEL
const roleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  }
})
  
const Role = mongoose.model('Role', roleSchema)

export {Role}