import { Company } from "../models/Company";
import { Database } from "./Database";


export class MemoryDb implements Database {

    private companies: Company[] = [new Company("IDK", 2.3, this.newCompanyId(), {additiveFactor: 0, multiplicativeFactor: 0, exponentialFactor: 0})]
    private nextCompanyId = 0

    constructor() {}

    public async allCompanies() {
        return this.companies
    }

    public newCompanyId() {
        return this.nextCompanyId++
    }

}