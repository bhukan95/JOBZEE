import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"Please provide a title. "],
        minLength:[3,"Title Must Contain atleast 3 characters!"],
        maxLength:[30,"Title cannot exceed 30 characters"],

    },
    description:{
        type:String,
        required:[true,"Please provide a discription"],
        minLength:[30,"Discription Must Contain atleast 3 characters!"],
        maxLength:[500,"Discription cannot exceed 30 characters"],
    },
    catagory:{
        type:String,
        required:[true,"Please provide a catagory."], 
    },
    country:{
        type:String,
         required:[true,"Please a country name"],
    },
    city: {
        type: String,
        required: [true, "Please provide a city name."],
      },
      location: {
        type: String,
        required: [true, "Please provide location."],
        minLength: [20, "Location must contian at least 20 characters!"],
      },
      fixedSalary: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
      salaryFrom: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
      salaryTo: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
      expired:{
        type:Boolean,
        default:false,
      },
      jobPostedOn: {
        type: Date,
        default: Date.now,
      },
      postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },



});
export const Job = mongoose.model("Job",jobSchema);
