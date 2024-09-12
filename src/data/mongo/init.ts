import mongoose from "mongoose";

interface ConnectionOptions {
  mongoUrl: string;
  dbName: string;
}

// Connect to MongoDB
export class MongoDatabase {
  static async connect(options: ConnectionOptions) {
    const { mongoUrl, dbName } = options;

    try {
      await mongoose.connect(mongoUrl, {
        dbName: dbName,
      });

      console.log("Mongo connected");
    } catch (error) {
      console.log("Mongo connection error");
      throw error;
    }
  }
}
