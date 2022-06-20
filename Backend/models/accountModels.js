import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    address: String,
    phone: Number,
    joinDate: {
        type: Date,
        default: new Date()
    },
});
const Accounts = mongoose.model('Account', accountSchema)

export default Accounts;