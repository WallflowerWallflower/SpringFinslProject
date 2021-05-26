import {User} from './user.model';

export class Applicant {
  constructor(
    public id: string,
    public name: string,
    public phone: string,
    public user: User,
  ) {}
}
