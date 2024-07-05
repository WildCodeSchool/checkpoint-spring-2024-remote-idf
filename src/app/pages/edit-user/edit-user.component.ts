import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'chk-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      const id = +data.get('id')!;

      this.userService.getById(id).subscribe(user => {
        this.user = user;
      }, (error) => {
        setTimeout(() => {
          this.snackBar.open('Impossible de récupérer le user d\'id'+ id, undefined, { duration: 3000 });
        }, 500);
      });
    });
  }


  edit() {
    this.userService.update(this.user).subscribe((user: User) => {

      let message = 'Perfecto !! ';
      if (!user){
        message = 'Pas d\'erreur pour le front, mais il semble que tu ne renvois pas l\'utilisateur';
        this.snackBar.open(message, undefined, { duration: 3000 });
        return;
      }

      if (!user.imageUrl){
        message = 'Pas d\'erreur pour le front, mais il semble que tu ne renvois pas l\'image associé au user';
        this.snackBar.open(message, undefined, { duration: 3000 });
        return;
      }


      const snackRef = this.snackBar.open(message, undefined, { duration: 3000 });
      snackRef.afterDismissed().subscribe(() => {
        this.router.navigateByUrl('/details/' + user.id);
      });
    }, (error) => {

      this.snackBar.open(error.message, undefined, { duration: 3000 });
    });

  }


}
