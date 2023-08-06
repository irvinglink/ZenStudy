export class UserProfile {
  id: string;
  pomodoro: number;
  short_break: number;
  long_break: number;
  wallpaper_id: number;
  playlist_id: number;
  todos: Map<number, string>;

  constructor(
    id: string,
    pomodoro: number,
    short_break: number,
    long_break: number,
    wallpaper_id: number,
    playlist_id: number,
    todos: Map<number, string>
  ) {
    this.id = id;
    this.pomodoro = pomodoro;
    this.short_break = short_break;
    this.long_break = long_break;
    this.wallpaper_id = wallpaper_id;
    this.playlist_id = playlist_id;
    this.todos = todos;
  }
  
}
