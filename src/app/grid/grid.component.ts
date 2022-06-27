import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() letter?: string;
  @Input() nextLetterSpace? : number;
  numOfSquares: number[] = [...Array(30).keys()]

  constructor() { }

  ngOnInit(): void {
  }

  checkEqual(n: number): boolean {
    return n == this.nextLetterSpace;
  }

}
