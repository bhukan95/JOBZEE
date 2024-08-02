import e from "express";
import {employerGetAllApplications,jobSeekerDeleteApplication,jobseekerGetAllApplications, postApplication} from "../controllers/applicationController.js"
import { isAuthrized } from "../middlewares/auth.js";
const router = e.Router();

router.get("/jobseeker/getAll",isAuthrized,jobseekerGetAllApplications);
router.get("/employer/getAll",isAuthrized,employerGetAllApplications);
router.delete("/delete/:id",jobSeekerDeleteApplication)
router.post("/post",isAuthrized,postApplication)

export default router;
