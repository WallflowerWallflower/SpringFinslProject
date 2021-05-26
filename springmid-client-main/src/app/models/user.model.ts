import {Role} from './role.model';
import {Job} from './job.model';
import {Sub} from './sub.model';

export class User {
  constructor(
    public id: string,
    public username: string,
    public name: string,
    public image: string,
    public phone: string,
    public description: string,
    public roles: Role[],
    public jobs: Job[],
    public subs: Sub[],
  ) {}
}
