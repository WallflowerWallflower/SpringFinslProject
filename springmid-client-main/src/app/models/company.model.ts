import {User} from './user.model';

export class Company {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public description: string,
    public user: User,
  ) {}
}
