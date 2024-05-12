const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    projectImage: {
      type: String,
      required: true,
    },
    projectCategory: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
    },
    projectSourceCode: {
      type: String,
      required: true,
    },
    projectLiveURL: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
