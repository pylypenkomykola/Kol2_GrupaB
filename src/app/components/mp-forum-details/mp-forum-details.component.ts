import { Component, OnInit } from '@angular/core';
import {MPDataService} from '../../services/mp-data.service';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'mp-forum-details',
  templateUrl: './mp-forum-details.component.html',
  styleUrls: ['./mp-forum-details.component.css']
})
export class MPForumDetailsComponent implements OnInit {

  public post: PostModel;

  constructor(private service: MPDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.paramMap
      .subscribe(param => {
        id = param.get('id');
      });

    this.getPost(id);
  }

  getPost(id) {
    this.service.getPost(id).subscribe((response: PostModel) => {
      this.post = response;
    });
  }

}
