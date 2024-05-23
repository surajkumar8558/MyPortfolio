const express = require("express");

const router = express.Router();
const project = require("../controllers/Project.js");
const adminRoutes = require("../controllers/User.js");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.route("/adminRegister").post(adminRoutes.register);
router.route("/adminLogout").get(adminRoutes.clearCookie);
router.route("/adminLogin").post(adminRoutes.login);

router.route("/projects").get(project.getProjectsData);
router.route("/dashboard").post(verifyToken, adminRoutes.dashboard);
router.route("/dashboard/project").get(project.getProjectsData);
router.route("/dashboard/project").post(verifyToken, project.createProject);
router
  .route("/dashboard/updateProject")
  .post(verifyToken, project.updateProject);
router
  .route("/dashboard/updateProject")
  .put(verifyToken, project.updateProject);
router.route("/dashboard/project").delete(verifyToken, project.deleteProject);

module.exports = router;
