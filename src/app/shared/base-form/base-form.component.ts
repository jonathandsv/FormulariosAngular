import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit{

  formulario: FormGroup;

  constructor(){}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  abstract submit();

  onSubmit(){

    if(this.formulario.valid){
      this.submit();
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario)
    }

  }

  verificaValidacoesForm(formulario: FormGroup | FormArray){
    Object.keys(formulario.controls).forEach(campo => {
      console.log(campo);
      const controle = formulario.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray){
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetarFormulario() {
    this.formulario.reset();
  }

  verificaValidoTouched(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidoTouched(campo),
      'has-feedback': this.verificaValidoTouched(campo)
    }
  }


}
