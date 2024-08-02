import  mongoose  from "mongoose";

export const dbConnection = ()=>{
   mongoose.connect(process.env.MONGO_URI,{
    dbname: "MERN_STACK_JOBSEEKING"
   }).then(()=>{
     console.log('Connect')
   }).catch((err)=>{
    console.log('Some error occured while connecting to database: ${err}');
   })
} 
