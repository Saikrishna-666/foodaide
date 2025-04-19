import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Make sure .env is loaded

export const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
        throw new Error("MONGODB_URI is not defined in .env file");
    }
    console.log("MongoDB URI:", mongoURI); // Only for debugging; remove in production
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};
