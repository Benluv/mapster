import { User } from "../models/User"
import { Request, Response } from "express"

const controller = {
    getUsers: (req: Request, res: Response) => {
        const users = User.findAll()

        res.json(users)
    }
}