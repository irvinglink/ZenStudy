"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
class UserProfile {
    constructor(id, pomodoro, short_break, long_break, wallpaper_id, playlist_id, todos) {
        this.id = id;
        this.pomodoro = pomodoro;
        this.short_break = short_break;
        this.long_break = long_break;
        this.wallpaper_id = wallpaper_id;
        this.playlist_id = playlist_id;
        this.todos = todos;
    }
}
exports.UserProfile = UserProfile;
