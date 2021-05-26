import {City} from './city.model';
import {Sphere} from './sphere.model';
import {Type} from './type.model';
import {User} from './user.model';

export class Job {
  constructor(
    public id: string,
    public name: string,
    public salary: number,
    public xp: number,
    public description: string,
    public skills: string,
    public cityId: string,
    public sphereId: string,
    public typeId: string,
    public userId: string,
    public city: City,
    public sphere: Sphere,
    public type: Type,
    public user: User,
    public createdAt: string
  ) {}
}
