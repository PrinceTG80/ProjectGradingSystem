import { Component, OnInit,AfterViewInit,  ElementRef, ViewChild } from '@angular/core';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-generate-project',
  templateUrl: './generate-project.page.html',
  styleUrls: ['./generate-project.page.scss'],
})
export class GenerateProjectPage implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;

  constructor(public sharedService: SharedServiceService) { 
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.sharedService.reportLabel,
        datasets: [{
          data: this.sharedService.reportFract,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          // yAxes: [{
          //   ticks: {
          //     beginAtZero: true
          //   }
          // }]
        }
      }
    });
  }

}
