import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from "../controllers/jobsController.js";
import testUser from "../middleware/testUser.js";
const jobsRouter = express.Router();

jobsRouter.route("/").post(testUser, createJob).get(getAllJobs);
jobsRouter.route("/stats").get(showStats);
jobsRouter.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);

export default jobsRouter;
