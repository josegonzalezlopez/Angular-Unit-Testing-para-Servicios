import { Component } from '@angular/core';

import { Calculator } from './calculator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-testing-services';


  ngOnInit(){

    const calculator = new Calculator();

    const rtaMultiply = calculator.multiply(4, 5);

    const rtaDivide = calculator.divide(4, 0);

  }

}
