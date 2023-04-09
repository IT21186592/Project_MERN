import mongoose from "mongoose";

const connectToMongo = async()=>{

    try {

      const res =   await mongoose.connect("mongodb+srv://NajasMNM:Najath68*@cluster0.pjao72k.mongodb.net/?retryWrites=true&w=majority");
        if(res){
            console.log("connected successfully");
        }
    } catch (error) {
        console.log(error);
    }
};

export default connectToMongo;