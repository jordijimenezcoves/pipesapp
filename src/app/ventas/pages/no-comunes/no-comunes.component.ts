import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Luis', 'Daniel'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona() {
    this.nombre = this.nombre==='Fernando'?'Susana':'Fernando';
    this.genero = this.genero==='masculino'?'femenino':'masculino';
  }

  borrarCliente() {
    if(this.clientes.length==0){
      this.clientes = ['Maria', 'Pedro', 'Juan', 'Luis', 'Daniel'];
    }else{
      // this.clientes = this.clientes.slice(0, this.clientes.length-1);
      this.clientes.pop();
    }
  }

  // KeyValue pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  // Async Pipe
  miObservable = interval(1000); // 0, 1, 2, 3, 4...

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('¡Tenemos data de promesa!');
    }, 3500);
  });

}
