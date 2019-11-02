import { Component, OnInit, Input } from "@angular/core";


@Component({
  selector: 'app-compo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
