const express = require("express");
const Tasks = require ("../data/data.js")

const router = express.Router();

//share tasks with client
router.get("/gettasks", async (req, res) => {
  try {
    return res.status(200).send(Tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      errors: [
        {
          value: "no-value",
          msg: "Sorry for the inconvinience some internal server error occurred",
          param: "no-param",
          location: "server",
        },
      ],
    });
  }
});
//add tasks from client
router.post("/addtasks", async (req, res) => {
  try {
    if (req.body.task) {
      tasks.push_back(req.body.task);
      return res.status(200).send("Successfully added the task");
    } else {
      throw "error";
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      errors: [
        {
          value: "no-value",
          msg: "Sorry for the inconvinience some internal server error occurred",
          param: "no-param",
          location: "server",
        },
      ],
    });
  }
});

module.exports = router;
