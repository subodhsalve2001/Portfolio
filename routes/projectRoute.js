const { getAllProjectsController, addProjectController, deleteProjectController, deleteAllProjectController } = require("../controller/projectController")

const router = require("express").Router()
router
    .get("/", getAllProjectsController)
    .post("/add", addProjectController)
    .delete("/delete/all", deleteAllProjectController)
    .delete("/delete/:ID", deleteProjectController)
module.exports = router