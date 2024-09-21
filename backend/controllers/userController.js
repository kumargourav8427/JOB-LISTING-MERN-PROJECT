import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        console.log(fullname, email, phoneNumber, password, role);
        
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "user alerdy exit with this email",
                success: false
            })

        }

        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            fullname, email, phoneNumber, password: hashedPassword, role
        })

        return res.status(201).json({
            message: "Account created succesfully",
            success: true
        })

    } catch (error) {
        console.log(error);

    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        };
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Incorret email or password",
                success: false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorret email or password",
                success: false
            })
        }
        // 
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesnot exsits with current role",
                success: false
            })
        }


        const toakenData = {
            userId: user._id
        }
        const token = await jwt.sign(toakenData, process.env.SECRET_KEY, { expiresIn: '1d' })

        user = {
            _id: user._id,
            fullname: user.fullanme,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile

        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullanme}`,
            user,
            success: true
        })

    } catch (error) {
        console.log(error);

    }

}

export const logout = async (req,res) =>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message: `Logout Succesfully`,
            success: true
        })
        
    } catch (error) {
        console.log(error);
        
    }
} 