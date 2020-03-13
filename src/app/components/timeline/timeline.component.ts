import { Component, OnInit } from '@angular/core';
import {Animations} from '../../enum/animations.enum';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  private readonly animations = Animations;

  constructor() { }

  ngOnInit(): void { }

  public setAnimation(index: number) {
    return !(index % 2) ? this.animations.right : this.animations.left;
  }
}
