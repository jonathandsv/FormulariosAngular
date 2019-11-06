import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.componet.html',
  styleUrls: ['./form-debug.componet.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form;

  constructor(){}

  ngOnInit(){}
}
