import { Company } from "../models/Company";

export abstract class Database {
    public abstract allCompanies: () => Promise<Company[] | null> 

}