import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const grid = document.getElementById("grid")!;
    for (let index: number = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", (index + 1).toString());
      console.log(square)
      grid.appendChild(square);
    }
  }

}
