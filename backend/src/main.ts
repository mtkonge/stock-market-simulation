import express from "express";
import { api } from "./api"
import { MemoryDb } from "./db/MemoryDB";
import cors from "cors"

const port = 8000

function main() {
    const app = express();
    
    const db = new MemoryDb()

    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    app.use("/api", api(db));
    app.use("/", express.static("../frontend"));

    app.listen(port, () => console.log("running on port", port))
}

main()