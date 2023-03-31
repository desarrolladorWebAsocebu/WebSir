import { Component } from "@angular/core";
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  templateUrl: "./dashboard2.component.html",
  styleUrls: ["./dashboard2.component.css"],
})
export class Dashboard2Component {
  subtitle: string;
  constructor() {
    this.subtitle = "This is some text within a card block.";
  }

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 5,
  };

  public lineChartOptions1: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
      ],
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false,
    elements: { line: { tension: 0 } },
  };

  public barChartLabels: string[] = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
  ];
  public barChartType = "bar";
  public barChartLegend = false;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Iphone 8" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Iphone X" },
  ];
  public barChartColors: Array<any> = [
    { backgroundColor: "#24d2b5" },
    { backgroundColor: "#20aee3" },
  ];

  // Sales Analytics Pie chart
  public pieChartLabels: string[] = ["Sales", "Earning", "Cost"];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = "pie";
  public lineChartLegend = false;

  // bar chart
  public barChartData1: Array<any> = [
    {
      data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
      label: "Cost",
      barPercentage: 0.2,
      categoryPercentage: 0.5,
    },
  ];
  public barChartLabels1: Array<any> = ["1", "2", "3", "4", "5", "6", "7"];
  public barChartOptions1: any = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public barChartColors1: Array<any> = [
    {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      hoverBackgroundColor: "rgba(255, 255, 255, 0.3)",
      hoverBorderWidth: 2,
      hoverBorderColor: "rgba(255, 255, 255, 0.3)",
    },
  ];
  public barChartLegend1 = false;
  public barChartType1 = "bar";
}
