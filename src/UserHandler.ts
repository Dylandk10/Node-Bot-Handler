/*
    Handle all the users for the sockets 
    static class because we want this class to handle all users involved 
    however, will need to implmeent better DS to scale 
*/
import { User } from "./User";

export abstract class UserHandler {
    private static users: User[] = [];
    private static numberOfUsersOnline: number = 0;


    public static getNumberOfUsersOnline(): number {
        return this.numberOfUsersOnline;
    }


    public static updateNumberOfUsersOnline(num: number) {
        this.numberOfUsersOnline += num;
    }


    public static addNewUser(id:string) {
        const numId: number = parseInt(id);
        console.log("Adding new user to UserHandler");
        this.users.push(new User(id, 0));
  

        this.DEGUB_seeAllUsers();
    }


    //removing users from the array 
    public static removeUser(id:string) {
        if(this.users.length <= 1) {
            this.users = []; 
        } else {
            for(let i = 0; i < this.users.length; i++) {
                if(this.users[i].getId() == id) {
                    this.users.splice(i,1);
                    console.log("User removed from handler");
                }
            }
        }
        this.DEGUB_seeAllUsers();
    }


    //returns the user based on their id (socket.id)
    public static getUser(id:string):User | null {
        let user:User | null = null;
        for(let i = 0; i < this.users.length; i++) {
            if(this.users[i].getId() == id) {
                user = this.users[i];
                break;
            }
        }
        return user;
    }

    //used to debug and see all the users in the array 
    private static DEGUB_seeAllUsers() {
        if(this.users.length <= 0) {
            console.log("No users online");
            return;
        }

        for(let i = 0; i < this.users.length; i++) {
            console.log(this.users[i]);
        }
    }
}