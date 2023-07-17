const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
name : String,
email : String,
gender : String,
pass : String,
age : String,
city : String,

})


const Usermodel=mongoose.model("user",userSchema)

module.exports={
    Usermodel
}
