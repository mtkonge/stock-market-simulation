import { Session } from "../models/Session";
import { Company } from "../models/Company";
import { Database } from "./Database";
import { User } from "../models/User";

export class MemoryDB implements Database {

    private nextCompanyId = 0
    private nextUserId = 0
    private nextSessionId = 0
    private companies: Company[] = [new Company(this.nextCompanyId++, "IDK", 2.3, {additiveFactor: 0, multiplicativeFactor: 0, exponentialFactor: 0})]
    private users: User[] = [new User(this.nextUserId++, "Him", "test")]
    private sessions: Session[] = []

    constructor() {}

    public async initialize(): Promise<void> {
        
    }

    public async newCompanyId() {
        return this.nextCompanyId++
    }

    public async allCompanies() {
        return this.companies
    }

    public async newUserId() {
        return this.nextUserId++
    }

    public async getUserByUsername(username: string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username == username)
                return this.users[i]
        }
        return null
    }

    public async createUser(user: User) {
        this.users.push(user)
        return user
    }

    public async getUserById(userId: number) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == userId)
                return this.users[i]
        }
        return null
    }

    public async newSessionId() {
        return this.nextSessionId++
    }

    public async createSession(session: Session) {
        this.sessions.push(session)
        return session
    }
}