// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connetDB from "./db/index.js";

import { app } from "./app.js";

dotenv.config({ path: "./env" });
connetDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Error: ${error}`);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("data connection has failed" + error);
  });



  
// Alternative approach
/*


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
