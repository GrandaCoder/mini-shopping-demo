export class User{
    name = "";
    email = "";
    password = "";
    online = false;
    deletedAccount = false;
    personalOrders = [];

    constructor(name, email, password, online = true, deletedAccount = false, personalOrders = []) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.online = online;
        this.deletedAccount = deletedAccount;
        this.personalOrders = personalOrders;
    }
}