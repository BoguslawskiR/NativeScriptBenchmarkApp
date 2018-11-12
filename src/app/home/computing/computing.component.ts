import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "Computing",
  moduleId: module.id,
  templateUrl: "./computing.component.html"
})
export class ComputingComponent implements OnInit {
  matrixState = []
  sortableArray = []
  filterableArray = []
  transponingResult = 0
  filteringResult = 0
  sortingResult = 0

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.generateData()
  }

  generateData() {
    const matrix = []
    for (let i = 0; i < 1000; i++) {
      matrix.push([])
      for (let j = 0; j < 1000; j++) {
        matrix[i].push(Math.floor(Math.random() * 100))
      }
    }
    this.matrixState = matrix

    const sortableArray = []
    for (let i = 0; i < 1000000; i++) {
      sortableArray.push(Math.floor(Math.random() * 100))
    }
    this.sortableArray = sortableArray

    const filterableArray = []

    for (let i = 0; i < 1000000; i++) {
      filterableArray.push(Math.floor(Math.random() * 100))
    }
    this.filterableArray = filterableArray
  }

  _transponMatrix() {
    const startTime = new Date().getTime()
    const rowsNumber = this.matrixState.length
    if (this.matrixState.length == 0) return this.matrixState

    const colsNumber = this.matrixState[0].length

    var transponedMatrix = new Array(colsNumber)
    for (let col = 0; col < colsNumber; col++) {
      transponedMatrix[col] = new Array(colsNumber);
    }

    for (let row = 0; row < rowsNumber; row++) {
      for (let col = 0; col < colsNumber; col++) {
        transponedMatrix[col][row] = this.matrixState[row][col];
      }
    }
    const endTime = new Date().getTime()
    this.transponingResult = (endTime - startTime)
    return null;
  }

  onSortValues() {
    const array = this.sortableArray
    const startTime = new Date().getTime()
    array.sort((a, b) => b - a)
    const endTime = new Date().getTime()
    this.sortingResult = endTime - startTime
  }

  onFilterValues() {
    const array = this.filterableArray
    const startTime = new Date().getTime()
    array.filter((value) => value > 50)
    const endTime = new Date().getTime()
    this.filteringResult = endTime - startTime
  }

  onBackTap(): void {
    this.routerExtensions.backToPreviousPage()
  }
}
