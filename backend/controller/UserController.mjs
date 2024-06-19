import UserModels from "../models/BCA.mjs"

const Createuser = async (req, res) => {
    try {
        const { id, name, email, phone, attendence } = req.body

        const NewUser = new UserModels({
            id,
            name,
            email,
            phone,
            // attendence: [attendence]
        })
        await NewUser.save()
        res.status(200).json({ success: true, Message: 'User Created Successfully', NewUser })
    } catch (error) {
        res.status(409).json({ success: false, Message: error.message })
    }



}
const GetUsers = async (req, res) => {
    try {
        const Users = await UserModels.find()
        if (!Users) return res.status(404).json({ success: false, message: 'No Data Found' });
        else return res.status(200).json({ success: true, data: Users })
    } catch (err) {
        console.log(err);
    }
}

const UpdateUser = async (req, res) => {
    try {
        const UserId = req.params.id;
        const updateUser = await UserModels.findByIdAndUpdate(UserId, req.body, { new: true });
        !updateUser ?
            res.status(404).json('Data Not Found') :
            res.status(200).json({ success: true, data: updateUser })
    } catch (err) {
        console.log(err);
    }
}
const DeleteUser = async (req, res) => {
    try {
        const UserId = req.params.id;

        const deleteUser = await UserModels.findByIdAndDelete(UserId);
        if (!deleteUser) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("Error in deleting user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

const importUser = async (req, res) => {
    try {
        res.send({ success: false })
    } catch (error) {
        console.log(error)
    }
}
const addAttendence = async (req, res) => {

    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        const user = await UserModels.findOne({ id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const today = new Date();
        const todayStart = new Date(today.setHours(0, 0, 0, 0));
        const todayEnd = new Date(today.setHours(23, 59, 59, 999));

        const attendanceIndex = user.attendance.findIndex(attendance => {
            const attendanceDate = new Date(attendance.dateTime);
            return attendanceDate >= todayStart && attendanceDate <= todayEnd;
        });

        if (attendanceIndex !== -1) {
            user.attendance[attendanceIndex].present = 1;
        } else {
            const newAttendance = {
                dateTime: new Date(),
                present: 1
            };
            user.attendance.push(newAttendance);
        }

        await user.save();

        return res.status(200).json({ message: 'Attendance updated successfully', attendance: user.attendance });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};










const removeAttendence = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        const user = await UserModels.findOne({ id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const today = new Date();
        const todayStart = new Date(today.setHours(0, 0, 0, 0));
        const todayEnd = new Date(today.setHours(23, 59, 59, 999));

        const attendance = user.attendance.find(attendance => {
            const recordDate = new Date(attendance.dateTime);
            return recordDate >= todayStart && recordDate <= todayEnd;
        });

        if (!attendance) {
            const newAttendance = {
                dateTime: new Date(),
                present: 0
            };
            user.attendance.push(newAttendance);
            await user.save();
            return res.status(404).json({ message: 'Student has been marked absent' });
        }

        attendance.present = 0;

        await user.save();

        return res.status(200).json({ message: 'Student has been marked absent', attendance });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};




export { Createuser, GetUsers, UpdateUser, DeleteUser, importUser, addAttendence, removeAttendence }