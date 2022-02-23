import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataRow } from '../../model/data-row';

@Injectable({
  providedIn: 'root',
})
export class SimpleDataService {
  private initial: DataRow[] = [
    { firstInput: 'Test 1_1', secondInput: 'Test 1_2', thirdInput: 'Test 1_3' },
    { firstInput: 'Test 2_1', secondInput: 'Test 2_2', thirdInput: 'Test 2_3' },
    { firstInput: 'Test 3_1', secondInput: 'Test 3_2', thirdInput: 'Test 3_3' },
  ];

  private results = new BehaviorSubject<DataRow[]>(this.initial);
  readonly resultsChange$ = this.results.asObservable();

  addDataRow(dataRow: DataRow) {
    let newValue = this.results.getValue();
    newValue.push(dataRow);
    this.results.next(newValue);
  }
}
