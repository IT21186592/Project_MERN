import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import userRoutes from "./routes/user.js";
const app = express();
const PORT =process.env.PORT || 8000;
connectToMongo();

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("api is running");
});

app.use("/api/v1",userRoutes);

app.listen(PORT,()=>{

    console.log(`Api is running on http://localhost:${PORT}`);

});