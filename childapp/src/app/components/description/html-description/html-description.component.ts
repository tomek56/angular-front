import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-html-description',
  templateUrl: './html-description.component.html',
  styleUrls: ['./html-description.component.css']
})
export class HtmlDescriptionComponent implements OnInit {

  @Input()
  course: Course;

  @ViewChild('descriptionContainer') dataContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    this.dataContainer.nativeElement.innerHTML = this.course.description.description;
  }

}
