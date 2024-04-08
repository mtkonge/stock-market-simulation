export class Session {
    public id: number;
    public token: string;
    public userId: number;


    constructor(id: number, userId: number) {
        this.id = id;
        this.token = generateUUID();
        this.userId = userId;
    }
}

function generateUUID(length: number = 32) {
    const chars = "abcdef";
    let uuid = "";
    for (let i = 0; i < length; i++) 
        uuid = uuid + chars.charAt(Math.random() * chars.length);
    return uuid;
}