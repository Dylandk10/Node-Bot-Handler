export class User {
    private id:string;
    private messageCount:number;

    constructor(id:string, messageC:number) {
        this.id = id;
        this.messageCount = messageC;
    }

    public addToMessageCount() {
        this.messageCount += 1;
    }

    public getMessageCount(): number {
        return this.messageCount;
    }

    public getId(): string {
        return this.id;
    }
}