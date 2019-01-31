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

  @Output()
  saveProgress = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;


    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
          let currentTime = this.api.getDefaultMedia().currentTime;

          this.videoEnded.emit();

          console.log('save progress ' + currentTime);

          this.saveProgress.emit({currentTime: currentTime});
          //
        }
    );


  }
}
