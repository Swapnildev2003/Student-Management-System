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

const UserModels = mongoose.model("User", userSchema);
export default UserModels;
