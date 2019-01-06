import { Component, OnInit } from '@angular/core';
import { Car } from '../domain/car';
import { CarService } from '../services/carservice';

@Component({
  selector: 'app-state-demo',
  templateUrl: './state-demo.component.html',
  styleUrls: ['./state-demo.component.css']
})
export class StateDemoComponent implements OnInit {

  cars2: Car[];
  cols: any[];
  selectedCar2: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars2 = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
  }

}
