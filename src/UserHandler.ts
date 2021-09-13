/*
    Handle all the users for the sockets 
*/

export abstract class UserHandler {
    private static numberOfUsersOnline: number = 0;

    public static getNumberOfUsersOnline(): number {
        return this.numberOfUsersOnline;
    }

    public static updateNumberOfUsersOnline(num: number) {
        this.numberOfUsersOnline += num;
    }
}