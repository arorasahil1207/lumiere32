import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-shared-charts',
  templateUrl: './shared-charts.component.html',
  styleUrls: ['./shared-charts.component.css']
})
export class SharedChartsComponent implements OnInit {
  data: any;
  options: any;
  labelArr = [];
  grabscaleArr = [];
  gbsfScaleArr = [];
  constructor() { }
  reset() {
    this.chart.data.labels.pop();
    this.labelArr = [];
    this.grabscaleArr = [];
    this.gbsfScaleArr = [];
    this.createChart();
  }
  ngOnInit(): void {
    this.createChart();
  }
  chart: any
  createChart() {
    this.grabData.forEach((elem) => {
      this.labelArr.push(elem.month)
      this.grabscaleArr.push(elem.scaleValue);
    });

    this.gbsfData.forEach((elem) => {
      this.gbsfScaleArr.push(elem.scaleValue);
    });

    this.chart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.labelArr,
        datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,

          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: '5px',
          label: 'GRAB Balance',
          data: this.grabscaleArr,
        },
        {
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,

          backgroundColor: 'pink',
          borderColor: '#1E88E5',
          borderWidth: '5px',
          label: 'GBFS Balance',
          data: this.gbsfScaleArr,
        }]
      },

      options: {
        legend: {
          position: 'bottom',
        }
      }
    });
  }


  // this is for three months
  getPreviousData() {
    var d = new Date();
    var n = d.getMonth();
    let data = [];
    let gbsfDataArr = []
    for (var i = n - 1; i >= 2; i--) {
      this.grabData.some((res) => {
        if (res.monthIndex == i) {
          data.push(res)
        }
      });

      this.gbsfData.some((res) => {
        if (res.monthIndex == i) {
          gbsfDataArr.push(res)
        }
      });
    }
    //this.grabData = data;

    let newScaleArr = [];
    let newLabelArr = [];
    let newScaleGbsfArr = [];
    data.forEach((elem) => {
      newScaleArr.push(elem.scaleValue)
      newLabelArr.push(elem.month)
    })

    gbsfDataArr.forEach((elem) => {
      newScaleGbsfArr.push(elem.scaleValue)
    })
    this.chart.data.labels.pop();

    this.chart.data.datasets[0].data = newScaleArr
    this.chart.data.datasets[1].data = newScaleGbsfArr
    this.chart.data.labels = newLabelArr
    this.chart.update()
  }
  grabData: any = [
    { month: "January", scaleValue: 4100, monthIndex: 0 },
    { month: "Feburary", scaleValue: 4200, monthIndex: 1 },
    { month: "March", scaleValue: 4300, monthIndex: 2 },
    { month: "April", scaleValue: 4400, monthIndex: 3 },
    { month: "May", scaleValue: 4200, monthIndex: 4 },
    { month: "June", scaleValue: 4300, monthIndex: 5 },
    { month: "July", scaleValue: 4300, monthIndex: 6 },
    { month: "August", scaleValue: 3900, monthIndex: 7 },
    { month: "September", scaleValue: 3000, monthIndex: 8 },
    { month: "October", scaleValue: 3200, monthIndex: 9 },
    { month: "November", scaleValue: 2100, monthIndex: 10 },
    { month: "December", scaleValue: 3000, monthIndex: 11 },
  ]
  gbsfData: any = [
    { month: "January", scaleValue: 3100, monthIndex: 0 },
    { month: "Feburary", scaleValue: 3200, monthIndex: 1 },
    { month: "March", scaleValue: 3300, monthIndex: 2 },
    { month: "April", scaleValue: 3400, monthIndex: 3 },
    { month: "May", scaleValue: 3200, monthIndex: 4 },
    { month: "June", scaleValue: 3300, monthIndex: 5 },
    { month: "July", scaleValue: 3300, monthIndex: 6 },
    { month: "August", scaleValue: 2900, monthIndex: 7 },
    { month: "September", scaleValue: 2000, monthIndex: 8 },
    { month: "October", scaleValue: 3200, monthIndex: 9 },
    { month: "November", scaleValue: 3100, monthIndex: 10 },
    { month: "December", scaleValue: 2000, monthIndex: 11 },
  ]
}
