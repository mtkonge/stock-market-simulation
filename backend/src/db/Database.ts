import { Session } from "models/Session";
import { Company } from "../models/Company";
import { User } from "models/User";

export interface Database {
    newCompanyId(): Promise<number>
    allCompanies(): Promise<Company[] | null>

    newUserId(): Promise<number>
    getUserByUsername(username: string): Promise<User | null>
    createUser(user: User): Promise<User>
    getUserById(userId: number): Promise<User | null>

    newSessionId(): Promise<number>
    createSession(session: Session): Promise<Session>
}