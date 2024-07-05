import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post.service';
import { Post } from '../../models/post';
import { CommentService } from '../../shared/comment.service';
import { Comment } from '../../models/comment';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'chk-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts!: Post[];
  isLoading = true;

  constructor(public postService: PostService, private commentService: CommentService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  isScreenValid = false;

  code1 =
    `
[{
    'id': 1,
    'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non excepturi quo in! Est cupiditate',
    'imageUrl':  'https://www.change-your-home.com/wp-content/uploads/2019/10/meuse-chasse-balle-pied-770x400.jpg'
}]
`;

  code2 =
    `
[{
    'id': 1,
    'message': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non excepturi quo in! Est cupiditate',
    'imageUrl':  'https://www.change-your-home.com/wp-content/uploads/2019/10/meuse-chasse-balle-pied-770x400.jpg',
    'comments':[{
      'id':1,
      'message':'Super post',
    }]
}]
`;



  code3 =
    `
{
  "post": {
    "id":2
  },
  "message": "c'est vraiment un super post"
}
`;

  message = '';


  ngOnInit(): void {

    this.postService.getAll().subscribe((posts) => {
      this.posts = posts;
      this.isLoading = false;
    }, () => {

      this.isLoading = false;
    });
  }


  addComment(index: number) {
    this.posts[index].commentIsVisible = true;
  }


  sendComment(post: Post) {
    const realComment: Comment = { post: {id: post.id} as Post, message: this.message };

    this.commentService.create(realComment).subscribe((comment: Comment) => {
      this.message = '';
      if (!comment){
        this.snackBar.open('Le commentaire retourné est null', undefined, {duration: 3000});
        return;
      }
      if (!Array.isArray(post.comments)){
        post.comments = [];
      }
      post.comments.push(comment);
      this.openDialog();
    }, (error) => {
      this.snackBar.open('Erreur pendant la création', undefined, {duration: 3000});
    });
  }






  openDialog(): void {

    this.isScreenValid = true;
    const dialogRef = this.dialog.open(DialogComponent, {});
  }

}
