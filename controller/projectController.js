const project = require("../model/projectModel")

exports.getAllProjectsController = async (req, res) => {
    try {
        const result = await project.find()
        res.json({
            success: true,
            message: "project fetch Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: true,
            message: "error" + error
        })
    }
}
exports.addProjectController = async (req, res) => {
    try {
        const result = await project.create(req.body)
        res.json({
            success: true,
            message: "project added true",
            result
        })
    } catch (error) {
        res.json({
            success: true,
            message: "error" + error
        })
    }
}
exports.deleteProjectController = async (req, res) => {
    try {
        const { ID } = req.params
        const result = await project.findByIdAndDelete(ID, req.body, { new: true })
        res.json({
            success: true,
            message: "project delete success",
            result
        })
    } catch (error) {
        res.json({
            success: true,
            message: "error" + error
        })
    }
}
exports.deleteAllProjectController = async (req, res) => {
    try {
        const result = await project.deleteMany(req.body)
        res.json({
            success: true,
            message: "All projects Delete successfully",
            result
        })
    } catch (error) {
        res.json({
            success:true,
            message: "error" + error
        })
    }
}