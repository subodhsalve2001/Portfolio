const mongoose = require("mongoose")
const projectSchema = mongoose.Schema({
    title: String,
    desc: String,
    link: String,
    img: String
})
module.exports = mongoose.model("project", projectSchema)