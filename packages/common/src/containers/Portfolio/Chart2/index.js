import React, { Component } from "react";
import Box from "../Banner";
//import { Line as LineChart } from 'react-chartjs-2';
const {Line} = require("react-chartjs-2");
const charStyle = {
  position: "absolute",
  bottom: "6%",
  left: "0",
  // height:"auto",
  zIndex: "1",
  width: "50vh",
  height: "50vh"
};
//var LineChart = require("react-chartjs").Line;



class Chart2 extends Component {
  mymytest = 0;
  mycharTest = ["hello world", "hello happy world", "hello world2", "hello happy world2", "hello world3", "hello happy world3"];
  localData;

  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.state = {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,0.2)',
            //borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            //borderJoinStyle: 'miter',
            pointBorderColor: 'white',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      options: {
        scaleShowGridLines: true,
        maintainAspectRatio: false,
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive:true,
        legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        tooltips: {
          // callbacks: {
          //   beforeTitle:function (tooltipItems, data) {
          //     console.log("hello")
          //     return "hello"
          //   },
          //   title:function (tooltipItems, data) {
          //     console.log("hello")
          //     return "hello"
          //   },
          //   label: function (tooltipItems, data) {
          //     console.log("hello")
          //     return "hello \n world"
          //   }
          // }
          mode: 'single',
          legend: {
            display: false
          },
          callbacks: {
            afterBody: function(data) {
              var multistringText = ['first string'];
              // do some stuff
              multistringText.push('another string');

              return multistringText;
            },
            label: function(tooltipItem) {
              return "tooltipItem";
            }
          },
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              color: "rgba(0, 0, 0, 0)",

            }
          }]
      }
      },
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  updateWindowDimensions() {
    var width = parseInt(window.innerWidth * (70 / 100));
    var height = parseInt(window.innerHeight * (70 / 100));
    console.log(window.innerHeight, window.innerWidth);
    console.log(height, width);
  }
  componentWillMount() {

  }
  componentDidMount() {
    setInterval(this.refresh, 3000);
    this.updateWindowDimensions();

  }

  render() {
    return (
      <div style={charStyle}>
        <div style={{position:"relative"}}>
          <div style={{height:"50vh",width:"30wh"}}>
        <Line data={this.state.chartData} options={this.state.options}/>
        </div>
        </div>
      </div>

    );
  }

  refresh() {

  }

}

export default Chart2;