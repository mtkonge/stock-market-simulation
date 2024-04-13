import { Company } from "../models/Company";
import { Session } from "../models/Session";
import { User } from "../models/User";
import { Database } from "./Database";
import {readFile, writeFile, mkdir} from "fs/promises"

export class FileDB implements Database {

    private companiesPath = "./data/companies.json"
    private nextCompanyIdPath = "./data/nextCompanyId.txt"
    private usersPath = "./data/users.json"
    private nextUserIdPath = "./data/nextUserId.txt"

    private nextCompanyId: number = 0
    private nextUserId: number = 0
    private nextSessionId: number = 0

    private companies: Company[]
    private users: User[]
    private sessions: Session[]



    constructor() {
        this.initialize()
        this.users = [
            new User(this.nextUserId++, "Him", "test")
        ];
        this.sessions = [];
        this.companies = [
            new Company(this.nextCompanyId++, "IDK", 2.3, {additiveFactor: 0, multiplicativeFactor: 0, exponentialFactor: 0})
        ];
        this.save()
    }

    public async initialize() {
        await this.createFilesIfDoesNotExist();

        const companiesJSON = (
            await readFile(this.companiesPath)
        ).toString();
        const companies = JSON.parse(companiesJSON);
        this.companies = companies;

        this.nextCompanyId = parseInt((await readFile(this.nextCompanyIdPath)).toString())

        const usersJSON = (await readFile(this.usersPath)).toString();
        const users = JSON.parse(usersJSON);
        this.users = users;

        this.nextUserId = parseInt((await readFile(this.nextUserIdPath)).toString())

        this.save()

    } 

    private async createFilesIfDoesNotExist() {
        try {
            await mkdir("./data");
        } catch {}
        try {
            await readFile(this.companiesPath);
        } catch {
            await writeFile(this.companiesPath, "[]");
        }
        try {
            await readFile(this.nextCompanyIdPath);
        } catch {
            await writeFile(this.nextCompanyIdPath, "0");
        }
        try {
            await readFile(this.usersPath);
        } catch {
            await writeFile(this.usersPath, "[]");
        }
        try {
            await readFile(this.nextUserIdPath);
        } catch {
            await writeFile(this.nextUserIdPath, "0");
        }
    }

    private save = async () => {
        const usersJSON = JSON.stringify(this.users);
        await writeFile(this.usersPath, usersJSON);

        await writeFile(this.nextUserIdPath, this.nextUserId.toString())

        const companiesJSON = JSON.stringify(this.companies);
        await writeFile(this.companiesPath, companiesJSON);

        await writeFile(this.nextCompanyIdPath, this.nextCompanyId.toString())

    };

    newCompanyId(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    allCompanies(): Promise<Company[] | null> {
        throw new Error("Method not implemented.");
    }
    newUserId(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getUserByUsername(username: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserById(userId: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    public async newSessionId() {
        return this.nextSessionId++
    }

    public async createSession(session: Session) {
        this.sessions.push(session)
        return session
    }

}