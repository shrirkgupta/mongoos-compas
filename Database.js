const mongoose=require('mongoose')

let connection= ()=>{
    mongoose.connect(process.env.DATABASE)
    .then(()=> console.log("Database conneted"))
    .catch((err)=> console.log(err))
}

module.exports=connection