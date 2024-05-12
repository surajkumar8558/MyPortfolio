const Project = require("../models/projectSchema");

const getProjectsData = async (req, res) => {
  const getData = await Project.find({});
  return res.json({
    success: true,
    message: "Project Data",
    data: getData,
  });
};

const createProject = async (req, res) => {
  const {
    projectImage,
    projectCategory,
    projectName,
    projectDescription,
    projectSourceCode,
    projectLiveURL,
  } = req.body;

  if (
    !projectImage ||
    !projectCategory ||
    !projectName ||
    !projectDescription ||
    !projectSourceCode ||
    !projectLiveURL
  ) {
    return res.send({
      success: false,
      message: "Please fill all the fields",
    });
  }

  await Project.create({
    projectImage,
    projectCategory,
    projectName,
    projectDescription,
    projectSourceCode,
    projectLiveURL,
  }).then((res) => {
    console.log(res);
  });

  return res.json({
    success: true,
    message: "Create Project",
  });
};

const updateProject = async (req, res) => {
  const data = req.body;

  if (!data.editProjectId) {
    return res.json({
      success: false,
      message: "No Id Found",
    });
  }

  try {
    const findProject = await Project.findByIdAndUpdate(
      data.editProjectId,
      {
        _id: data.editProjectId,
        projectImage: data.editProjectImage,
        projectCategory: data.editProjectCategory,
        projectName: data.editProjectName,
        projectDescription: data.editProjectDescription,
        projectSourceCode: data.editProjectSourceCode,
        projectLiveURL: data.editProjectLiveURL,
      },
      {
        new: true,
      }
    );
    console.log(findProject);
  } catch (err) {
    console.log(err);
  }

  return res.json({
    success: true,
    message: "Update Project",
  });
};

const deleteProject = async (req, res) => {
  const id = req.body.editProjectId;

  if (!id) {
    return res.json({
      success: false,
      message: "No Id Found",
    });
  }

  const deletedProject = await Project.findByIdAndDelete(id);
  console.log(deletedProject);

  return res.json({
    success: true,
    message: "Project Deleted",
  });
};

module.exports = {
  getProjectsData,
  createProject,
  updateProject,
  deleteProject,
};
