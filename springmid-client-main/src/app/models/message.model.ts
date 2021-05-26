import {User} from './user.model';
import {JobCv} from './job-cv.model';

export class Message {
  constructor(
    public id: string,
    public text: string,
    public userId: string,
    public user: User,
    public jobCvId: string,
    public jobCv: JobCv,
    public createdAt: string
  ) {}
}
