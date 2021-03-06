import { Component, OnInit } from '@angular/core';

import { InterviewsService } from '../../core/services';
import { Interview } from '../../core/models/interview';

@Component({
    selector: 'app-interviews-all',
    templateUrl: './interviews-all.component.html',
    styleUrls:['interviews-all.component.css']
})

export class InterviewsAllComponent implements OnInit{
    public interviews: Interview[];

    constructor(private interviewService: InterviewsService) {
        this.interviews = [];
    }

    ngOnInit() {
        this.interviewService.getInterviews()
            .subscribe(interviews=> this.interviews = interviews);
    }
}

