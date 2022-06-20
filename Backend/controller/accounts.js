import Accounts from "../models/accountModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const postLogin = async (req, res) => {
    const { username, password } = req.body

    try {
        const existingUser = await Accounts.findOne({ username });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message :" Invalid Password" });

        const token = jwt.sign({ username: existingUser.username, id: existingUser.__id}, "test", { expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token })
    }
    catch(error) {
        res.status(500).json({ message: "Something went wrong"})
    }
}

export const postRegister = async (req, res) => {
    const { username, password, name, address, phone} = req.body

    try {
        const existingUser = await Accounts.findOne({ username });

        if(existingUser) return res.status(400).json({ message: "User already exist"})

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Accounts.create({ username, password: hashedPassword, name, address, phone })

        const token = jwt.sign({ username: result.username, id: result.__id}, "test", { expiresIn: "1h"})

        res.status(200).json({ result, token })
    }
    catch(error) {
        res.status(500).json({ message: "Something went wrong"})
    }
}