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
  console.log("inside2")
  try {
      console.log("inside1")
      Tasks.push(req.body);
      return res.status(200).send("Successfully added the task");
  } catch (error) {
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
