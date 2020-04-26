import {Component, Input, OnInit} from '@angular/core';
import {Blogpost} from '../../blogpost';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-blogpost-intro',
  templateUrl: './blogpost-intro.component.html',
  styleUrls: ['./blogpost-intro.component.scss']
})
export class BlogpostIntroComponent implements OnInit {
  @Input() blogpost: Blogpost;

  username = 'ERROR';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.user.getValue().username;
  }

}
