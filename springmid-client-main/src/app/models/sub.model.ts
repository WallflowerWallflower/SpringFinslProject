import {User} from './user.model';
import {Sphere} from './sphere.model';

export class Sub {
  constructor(
    public id: string,
    public count: number,
    public userId: string,
    public user: User,
    public sphereId: string,
    public sphere: Sphere,
  ) {}
}
