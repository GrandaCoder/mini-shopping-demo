export class User{
    name = "";
    email = "";
    password = "";
    online = false;
    deletedAccount = false;

    constructor(name, email, password, online = true, deletedAccount = false){
        this.name = name;
        this.email = email;
        this.password = password;
        this.online = online;
        this.deletedAccount = deletedAccount;
    }
}