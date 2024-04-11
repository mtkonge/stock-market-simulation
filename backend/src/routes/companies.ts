import { Router, Request, Response } from "express";
import { Database } from "../db/Database";

export function companyApiRoutes(router: Router, db: Database) {
    
    router.get("/all-companies", async (req: Request, res: Response) => {

        return res.json({ companies: await db.allCompanies()})
    })

    return router
}