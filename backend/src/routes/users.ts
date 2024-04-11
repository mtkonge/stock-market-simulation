import { Router, Request, Response } from "express";
import { Database } from "../db/Database";
import bcrypt from "bcrypt"
import { Session } from "../models/Session";

export function userApiRoutes(router: Router, db: Database) {
    
    router.post("/register", async (req: Request, res: Response) => {
        const username = req.body.username
        const password = req.body.password
        if (!username || !password) {
            return res.status(404).json({msg: "Username or password does not exist"})
        }

        if (!db.getUserByUsername(username)) {
            return res.status(403).json({msg: "User with username already exist"})
        }

        const hashedPassword = await bcrypt.hash(password, 12).then(hash => {return hash})
        
        db.createUser({id: await db.newUserId(), username: username, hashedPassword: hashedPassword})

        return res.status(200).json({msg: "Ok"})
    })

    router.post("/login", async (req: Request, res: Response) => {

        const username = req.body.username
        const password = req.body.password

        const user = await db.getUserByUsername(username)

        if (!user || !(await bcrypt.compare(password, user.hashedPassword))) {
            return res.status(401).json({msg: "Username or password incorrect"})
        }

        
        const session = new Session(await db.newSessionId(), user.id)

        res.cookie("token", session.token)

        return res.status(200).send({msg: "Ok"})

    })

    router.get("/user/:id", async (req: Request, res: Response) => {

        const userId = parseInt(req.params.id)

        const user = await db.getUserById(userId)

        if (!user) {
            return res.status(404).send({msg: "User not found"})
        }
        
        return res.status(200).send({msg: "Ok", user: user})

    })

    return router

}