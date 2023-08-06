import { UUID } from "crypto";
import { UserProfile } from "./UserProfile";"./UserProfile";

export class User {
  uuid: UUID;
  username: string;
  password: string;
  email: string;
  user_profiles: UserProfile[];

  
  constructor(
    uuid: UUID,
    username: string,
    password: string,
    email: string,
    user_profiles: UserProfile[]
  ) {
    this.uuid = uuid;
    this.username = username;
    this.password = password;
    this.email = email;
    this.user_profiles = user_profiles;
  }
}
