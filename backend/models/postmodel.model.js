const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    name:String,
    title:String,
    class:String,
    // subject:{type:String,enum:["Maths","English","Hindi"]},
    subject:String,
    mark:String,
    gender:String,
    userID:String,
    user:String,
   

},{
    versionKey:false
})

const PostModel=mongoose.model("post",postSchema)

module.exports={
    PostModel
}