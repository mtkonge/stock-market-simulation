
type AlgoProfile = {
    multiplicativeFactor: number,
    additiveFactor: number,
    exponentialFactor: number,
}

const algoProfile = (profile: Partial<AlgoProfile> = {
    multiplicativeFactor: 0,
    additiveFactor: 0,
    exponentialFactor: 0,
}) => profile;

const prifle1 = algoProfile()

export class Company {
    public id: number;
    public name: string;
    public stockPrice: number;

    constructor(name: string, stockPrice: number, id: number,  public profile: AlgoProfile) {
        this.id = id
        this.name = name
        this.stockPrice = stockPrice
    }


    public calculateNewPrice() {
        const oldPrice = this.stockPrice;
        this.stockPrice = 
            Math.random() * this.profile.multiplicativeFactor * oldPrice
            + Math.random() * this.profile.additiveFactor
            + Math.random() * oldPrice**2 * this.profile.exponentialFactor
    }
}

