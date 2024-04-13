import express from "express";
import { api } from "./api"
import { MemoryDB } from "./db/MemoryDB";
import cors from "cors"
import cookieParser from "cookie-parser";
import { FileDB } from "./db/FileDB";


const port = 8000

async function main() {
    const app = express();
    
    // const db = new MemoryDB()
    const db = new FileDB()

    app.use(cookieParser())
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    app.use("/api", api(db));
    app.use("/", express.static("../frontend"));

    app.listen(port, () => console.log("running on port", port))
}

main()