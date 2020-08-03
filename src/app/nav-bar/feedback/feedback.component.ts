import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  formControl: FormGroup;
  data = {
    name: '',
    mail: '',
    message: '',
  };

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.formControl = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.service.support(this.data);
  }

  get form() {
    return this.formControl.controls;
  }
}
