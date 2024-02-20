// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connetDB from "./db/index.js";

dotenv.config({ path: "./env" });
connetDB();

// Alternative approach
/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error(error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
*/
