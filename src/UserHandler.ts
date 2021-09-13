/*
    Handle all the users for the sockets 
*/

import { SSL_OP_COOKIE_EXCHANGE } from "constants";
import e from "express";
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

    private static DEGUB_seeAllUsers() {
        for(let i = 0; i < this.users.length; i++) {
            console.log(this.users[i]);
        }
    }
}