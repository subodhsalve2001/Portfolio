const mongoose = require("mongoose")
const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
    }

}
module.exports = connectDB