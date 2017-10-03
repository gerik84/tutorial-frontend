import {BaseModel} from "./BaseModel";

export class UserModel extends BaseModel {
  email: string;
  name: string;
  login: string;
  password: string;
}
