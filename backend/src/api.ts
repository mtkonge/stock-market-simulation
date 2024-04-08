import { Router } from "express"
import { Database } from "./db/Database"
import { companyApiRoutes  } from "./routes/companies"
import { userApiRoutes } from "./routes/users"


export function api(db: Database) {
    const router = Router()
    companyApiRoutes(router, db)
    userApiRoutes(router, db)
    return router

}