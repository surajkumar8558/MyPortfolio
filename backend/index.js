const express = require("express");

const app = express();

const PORT = 8000;

// app.use(cors());

app.get("/admin", (req, res) => {
  const projectData = [
    {
      projectID: 1,
      projectName: "Portfolio",
      technologiesUsed: ["React", "NodeJS", "Tailwind", "Express", "MongoDB"],
    },
    {
      projectID: 2,
      projectName: "ChatApp",
      technologiesUsed: [
        "WebSocket",
        "React",
        "NodeJS",
        "Tailwind",
        "Express",
        "MongoDB",
      ],
    },
    {
      projectID: 3,
      projectName: "E-Commerce",
      technologiesUsed: ["React", "NodeJS", "Tailwind", "Express", "MongoDB"],
    },
  ];
  return res.send(projectData);
});

app.listen(PORT, () => {
  console.log("App is listening on PORT: " + PORT);
});
