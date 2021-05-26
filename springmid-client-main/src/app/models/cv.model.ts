import {User} from './user.model';

export class Cv {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public salary: number,
    public xp: number,
    public description: string,
    public skills: string,
    public userId: string,
    public user: User,
    public createdAt: string
  ) {}
}
