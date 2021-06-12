import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'angular';
  nombreUpper: string = 'ANGULAR';
  nombreCompleto: string = 'aNgUlAr framework';

  fecha: Date = new Date();

}
