const express = require("express");

const router = express.Router();
const projectData = require("../controllers/getProjectData.js");
const adminRoutes = require("../controllers/User.js");

router.route("/").get(projectData.getProjectData);
router.route("/adminLogin").get(adminRoutes.clearCookie);
router.route("/adminRegister").post(adminRoutes.register);
router.route("/adminLogin").post(adminRoutes.login);
router.route("/dashboard").get(adminRoutes.dashboard);

module.exports = router;
