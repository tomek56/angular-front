import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()
  lesson: Lesson;

  constructor() { }

  ngOnInit() {
    console.log('lekcja juz w komponencie');
    console.log(this.lesson.movie.url);
  }
}
