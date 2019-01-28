import { Component, OnInit } from '@angular/core';
import { Salaried } from '../../shared/models/salaried.model';
import { SalariedService } from '../../shared/services/salaried.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {
  salaries: Salaried[];

  constructor(private salariedService: SalariedService) {}

  ngOnInit() {
    this.filterSalariesByAttribute('all');
  }

  onChange(selectValue) {
    this.filterSalariesByAttribute(selectValue);
  }

  filterSalariesByAttribute(attribute: string) {
    this.salariedService
      .filterSalariesByAttribute(attribute)
      .subscribe(list => {
        this.salaries = list;
      });
  }
}
