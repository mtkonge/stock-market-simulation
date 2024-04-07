import { Company } from "../models/Company";
import { Database } from "./Database";


export class MemoryDb extends Database {

    private companies: Company[] = [new Company("IDK", 2.3)]

    constructor() {
        super()
    }

    public allCompanies = async () => {
        return this.companies
    }

}