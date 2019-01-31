import { Component, OnInit, Input, Output } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { VgAPI } from 'videogular2/core';
import { EventEmitter } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

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

  @Output()
  saveProgress = new EventEmitter();

  @Input()
  sources: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {

          const currentTime = this.api.getDefaultMedia().currentTime;
          this.videoEnded.emit();
          this.saveProgress.emit({currentTime: currentTime});
          //
        }
    );


  }
}
