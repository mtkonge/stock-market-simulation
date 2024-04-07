import { Router } from "express"
import { Database } from "./db/Database"
import { companyApiRoutes  } from "./routes/companies"


export function api(db: Database) {
    const router = Router()
    companyApiRoutes(router, db)
    return router

}