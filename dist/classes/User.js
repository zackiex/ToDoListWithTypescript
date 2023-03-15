"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, username, password, userLastName, userFirstName, userPhone, userEmail) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.userLastName = userLastName;
        this.userFirstName = userFirstName;
        this.userPhone = userPhone;
        this.userEmail = userEmail;
    }
    displayUserInfo() {
        return `Username :${this.username} \n` +
            `Last name : ${this.userLastName} First name : ${this.userFirstName} \n` +
            `Phone : ${this.userPhone} \n` +
            `E-mail: ${this.userEmail} \n`;
    }
    setPassword(oldPassword, newPassword) {
        let ps = true;
        while (ps) {
            if (oldPassword == this.password) {
                ps = false;
                console.log("Password successfully changed");
                return this.password = newPassword;
            }
            else {
                console.log("Old password is incorrect");
            }
        }
    }
    setUserName(name) {
        return this.username = name;
    }
}
exports.User = User;
