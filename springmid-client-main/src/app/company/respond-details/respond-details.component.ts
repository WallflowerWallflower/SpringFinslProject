import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobCv} from '../../models/job-cv.model';
import {MessageService} from '../services/message.service';
import {Message} from '../../models/message.model';
import {JobCvService} from '../services/job-cv.service';

@Component({
  selector: 'app-respond-details',
  templateUrl: './respond-details.component.html',
  styleUrls: ['./respond-details.component.css']
})
export class RespondDetailsComponent implements OnInit {
  // @ts-ignore
  jobCv: JobCv;
  ready = false;
  id = '0';
  messages: Message[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private jobCvService: JobCvService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMessages();
  }
  getMessages(): void {
    this.messageService.getByResp(this.id).subscribe(
      res => {
        this.messages = res;
        console.log(res);
        this.jobCvService.get(this.id).subscribe(
          res1 => {
            this.jobCv = res1;
            console.log(res1);
            this.ready = true;
          }
        );
      }
    );
  }
  submit(text: any): void {
    // @ts-ignore
    this.messageService.create({text, jobCvId: this.id, userId: JSON.parse(localStorage.getItem('user')).id}).subscribe(
      res => {
        console.log(res);
        this.getMessages();
      }
    );
  }
}
