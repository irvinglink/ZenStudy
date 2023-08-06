"use strict";
"./UserProfile";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(uuid, username, password, email, user_profiles) {
        this.uuid = uuid;
        this.username = username;
        this.password = password;
        this.email = email;
        this.user_profiles = user_profiles;
    }
}
exports.User = User;
