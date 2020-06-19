import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'mp-forum-item',
  templateUrl: './mp-forum-item.component.html',
  styleUrls: ['./mp-forum-item.component.css']
})
export class MPForumItemComponent implements OnInit {

  @Input() public post: PostModel;

  constructor() { }

  ngOnInit() {
  }

}
