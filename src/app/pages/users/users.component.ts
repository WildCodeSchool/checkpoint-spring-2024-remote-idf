import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'chk-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  isLoading = false;

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'detail'];



  exemple =
  `[{
    "id":1,
    "firstname":"Joe",
    "lastname":"Start"
  },
  {
    "id":2,
    "firstname":"Baden",
    "lastname":"Powell"
  }]`;




  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      this.isLoading = false;
    }, (error) => {
      setTimeout(() => {

        this.snackBar.open('Il y a eu une erreur, pendant la récupération de la liste', undefined, {duration: 3000});
      }, 500);
      this.isLoading = false;
    });
  }

}
