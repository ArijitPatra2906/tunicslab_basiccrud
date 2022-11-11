const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        repuired: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        repuired: true,
    },
    enrollNo: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const StudentModel = mongoose.model("Student", StudentSchema)
module.exports = StudentModel;