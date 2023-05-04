import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formCliente: FormGroup;

  constructor(){
    this.formCliente;
  }


  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente){
    this.formCliente = new FormGroup({
      firstName: new FormControl(cliente.firstName),
      secondName: new FormControl(cliente.secondName),
      userName: new FormControl(cliente.userName),
      city: new FormControl(cliente.city),
      termos: new FormControl(cliente.termos),
    })
  }



  onSubmit(){
    console.log(this.formCliente.value);

    this.createForm(new Cliente()); //ou pode se usar o this.formCliente.reset(new Cliente());
  }

}
