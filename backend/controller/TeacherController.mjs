import { Teachers } from '../models/BCA.mjs'

const Createuser = async (req, res) => {
    try {
        const { id, name, email, phone, attendence } = req.body

        const NewUser = new Teachers({
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
        const Users = await Teachers.find()
        if (!Users) return res.status(404).json({ success: false, message: 'No Data Found' });
        else return res.status(200).json({ success: true, data: Users })
    } catch (err) {
        console.log(err);
    }
}

const UpdateUser = async (req, res) => {
    try {
        const UserId = req.params.id;
        const updateUser = await Teachers.findByIdAndUpdate(UserId, req.body, { new: true });
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

        const deleteUser = await Teachers.findByIdAndDelete(UserId);
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







export { Createuser, GetUsers, UpdateUser, DeleteUser, importUser }