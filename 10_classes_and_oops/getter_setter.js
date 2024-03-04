class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Herry`
    }
    set password(value){
        this._password = value
    }
}

const herry = new User("herry@gmail.com", "Hello ")
// console.log(herry.password);
console.log(herry.password);