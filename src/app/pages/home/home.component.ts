import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'chk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showStep3 = false;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.showStep3 = localStorage.getItem('STEP3') != null;

  }

  openRefuseMessage(){

    const messages = ['Whahaha', 'Arrête de perdre ton temps, la question est vite répondu', 'Pas le choix', ];

    const randIndex = parseInt((Math.random() * 3 + 1) + '', 10) - 1;

    this.snackBar.open(messages[randIndex], undefined, {duration: 3000});
  }


}
