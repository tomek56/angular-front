import { Component, OnInit, Input, Output } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { VgAPI } from 'videogular2/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  api: VgAPI;

  @Input()
  lesson: Lesson;

  @Output()
  videoEnded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    console.log("lesson.movie.url");
    console.log(this.lesson.movie.url);
    console.log(this.lesson);

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
          this.videoEnded.emit();
        }
    );
  }
}
