const Project = require("../models/projectSchema");

const getProjectsData = async (req, res) => {
  await Project.create({
    projectImageURL: A,
  });
  return res.json({
    message: "Project Data",
  });
};

module.exports = { getProjectsData };
