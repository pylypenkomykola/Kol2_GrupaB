import { Component, OnInit } from '@angular/core';
import {MPDataService} from '../../services/mp-data.service';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'mp-forum',
  templateUrl: './mp-forum.component.html',
  styleUrls: ['./mp-forum.component.css']
})
export class MPForumComponent implements OnInit {

  public items$: PostModel[];

  constructor(private service: MPDataService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.service.getPosts().subscribe((response: PostModel[]) => {
      this.items$ = response;
    });
  }
}
