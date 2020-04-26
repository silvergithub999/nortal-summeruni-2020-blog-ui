import {Component, Input, OnInit} from '@angular/core';
import {Blogpost} from '../../blogpost';

@Component({
  selector: 'app-blogpost-intro',
  templateUrl: './blogpost-intro.component.html',
  styleUrls: ['./blogpost-intro.component.scss']
})
export class BlogpostIntroComponent implements OnInit {
  @Input() blogpost: Blogpost;

  constructor() { }

  ngOnInit() {
  }

}
