import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  icons;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.icons = data.icon;
  }

  ngOnInit(): void {}
}
