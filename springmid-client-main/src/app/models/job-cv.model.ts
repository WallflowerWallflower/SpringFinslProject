import {User} from './user.model';
import {Job} from './job.model';
import {Cv} from './cv.model';

export class JobCv {
  constructor(
    public id: string,
    public jobApplied: number,
    public cvApplied: number,
    public jobId: string,
    public job: Job,
    public cvId: string,
    public cv: Cv,
  ) {}
}
