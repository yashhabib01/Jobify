import { readFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/connect.js";
import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    // await Job.deleteMany();

    const jsonPoducts = JSON.parse(
      await readFile(new URL("./mock_data.json", import.meta.url))
    );

    await Job.create(jsonPoducts);
    console.log("Success!!! ");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
