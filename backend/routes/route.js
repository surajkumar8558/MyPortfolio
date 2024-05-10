const express = require("express");

const router = express.Router();
const projectData = require("../controllers/Project.js");
const adminRoutes = require("../controllers/User.js");

// router.route("/").get(projectData.getProjectData);
router.route("/adminRegister").post(adminRoutes.register);
router.route("/adminLogin").get(adminRoutes.clearCookie);
router.route("/adminLogin").post(adminRoutes.login);

router.route("/dashboard").get(adminRoutes.dashboard);
router.route("/dashboard/project").get(projectData.getProjectsData);

module.exports = router;
