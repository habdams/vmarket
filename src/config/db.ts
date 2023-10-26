import mongoose from "mongoose";

const db = mongoose.connection;

const dbUri: string = process.env.DB_URI as string;

db.on("connected", () => {
    console.log("connected to MongoDB @" + db.host);
});

module.exports = mongoose.connect(dbUri);