import { Company } from "../models/Company";

export interface Database {
    allCompanies(): Promise<Company[] | null> 
    newCompanyId(): number
}