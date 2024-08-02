import e from "express";
import {deleteJob, getAlljobs,getSingleJob,getmyJobs,postJob, updateJob} from '../controllers/jobController.js'
import {isAuthrized} from '../middlewares/auth.js'

const router = e.Router();

router.get("/getalljob",getAlljobs);
router.post("/post",isAuthrized,postJob);
router.get("/getmyJobs",isAuthrized,getmyJobs);
router.put("/updateJob/:id",isAuthrized,updateJob);
router.delete("/delete/:id",isAuthrized,deleteJob);
router.get("/:id",getSingleJob);

export default router;
