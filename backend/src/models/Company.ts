export class Company {
    public id: number;
    public name: string;
    public stockPrice: number;

    constructor(name: string, stockPrice: number) {
        this.id = Math.round(Math.random() * 100000000)
        this.name = name
        this.stockPrice = stockPrice
    }
}