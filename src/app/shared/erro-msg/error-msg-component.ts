import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';


@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg-component.html',
  styleUrls: ['./error-msg-component.css']
})
export class ErroMsgComponent implements OnInit{

  @Input() control: FormControl;
  @Input() label: string;

  constructor() {}



  ngOnInit(){
  }


  get erroMessage(){

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return FormValidations.getErroMsg(this.label, propertyName, this.control.errors[propertyName])
        }
    }

    return null;
  }

}
