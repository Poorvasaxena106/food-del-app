import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://poorvasaxena106:7T0i37wXnt3sVKiq@cluster0.dk7znbh.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}