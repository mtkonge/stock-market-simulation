export class User {
    public id: number
    public username: string
    public hashedPassword: string

    constructor(id: number, username: string, hashedPassword: string) {
        this.id = id
        this.username = username
        this.hashedPassword = hashedPassword
    }
}