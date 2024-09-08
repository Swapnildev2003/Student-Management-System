import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    dateTime: {
        type: Date,
        required: true
    },
    present: {
        type: Number,
        required: true
    }
}, { _id: false });

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    attendance: {
        type: [attendanceSchema],
        default: []
    }
}, { timestamps: true });

const TeacherSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    department: {
        type: String
    },
    
}, { timestamps: true });

const UserModels = mongoose.model("User", userSchema);
const Teachers = mongoose.model("Teachers", TeacherSchema);
export  {Teachers,UserModels};
