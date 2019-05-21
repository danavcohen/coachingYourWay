import React, { Component } from "react";
import Box from "../Banner";
const charStyle = {
  position: "absolute", bottom:"6%",left:"0",height:"auto",zIndex:"1"
}
var LineChart = require("react-chartjs").Line;
var count=0;
// var chartData = {
//   // labels: ["January", "February", "March", "April", "May", "June", "July"],
//   labels: ["April", "May", "June", "July"],
//   datasets: [
//     // {
//     //   label: "My First dataset",
//     //   fillColor: "rgba(220,220,220,0.2)",
//     //   strokeColor: "rgba(220,220,220,1)",
//     //   pointColor: "rgba(220,220,220,1)",
//     //   pointStrokeColor: "#fff",
//     //   pointHighlightFill: "#fff",
//     //   pointHighlightStroke: "rgba(220,220,220,1)",
//     //   // data: [65, 59, 80, 81, 56, 55, 40]
//     //   data: [0, 3, 0, 2, 0, 1, 0]
//     // },
//     {
//       label: "My Second dataset",
//       fillColor: "rgba(151,187,205,0.2)",
//       strokeColor: "rgba(151,187,205,1)",
//       pointColor: "rgba(151,187,205,1)",
//       pointStrokeColor: "#fff",
//       pointHighlightFill: "#fff",
//       pointHighlightStroke: "rgba(151,187,205,1)",
//       //data: [28, 48, 40, 19, 86, 27, 90]
//       //data: [0, 0, 0, 0, 0, 0, 0]
//       data: [ 0, 2, 8, 20]
//     }
//   ]
// };
var chartOptions={

  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,

  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth : 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: false,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: false,

  //Boolean - Whether the line is curved between points
  bezierCurve : true,

  //Number - Tension of the bezier curve between points
  bezierCurveTension : 0.4,

  //Boolean - Whether to show a dot for each point
  pointDot : true,

  //Number - Radius of each point dot in pixels
  pointDotRadius : 10,

  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 8,

  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  pointHitDetectionRadius : 20,

  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,

  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 8,

  //Boolean - Whether to fill the dataset with a color
  datasetFill : false,
// {% raw %}
//String - A legend template
   legendTemplate : '<ul className=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
//  legendTemplate : '',
  scaleLineColor: 'transparent',
  showScale: false,
  //showTooltips: false,
  //responsive: false,
  //maintainAspectRatio: true,
// {% endraw %}

//Boolean - Whether to horizontally center the label and point dot inside the grid
  offsetGridLines : false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }],
    xAxes: [{
      ticks: {
        autoSkip: false
      }
    }]
  }



};

class Chart extends Component{

localData;
  constructor(props) {
          super(props);
    this.refresh=this.refresh.bind(this);
    this.state = {width: 1000, height: 470,
      chartData : {
        labels: ["April", "May", "June", "July","stam","stam"],
        datasets: [

          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "#373cff",
            // pointColor: "rgba(151,187,205,1)",
            pointBorderColor: "#373cff",
            pointColor: "white",
            pointStrokeColor: "#373cff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [ 1, 3, 15, 18,25,35]
          }
        ]
      }
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }
  updateWindowDimensions(){
    var width = parseInt(window.innerWidth*(70/100));
    var height= parseInt(window.innerHeight*(70/100));
    this.setState({ width:width, height: height });
    console.log(window.innerHeight,window.innerWidth);
    console.log(height,width);
  }
  componentDidMount() {
    setInterval(this.refresh, 3000);
    this.updateWindowDimensions();
  }
  render() {
    return(
    <div style={charStyle}>
      <LineChart data={this.state.chartData} options={chartOptions} width={this.state.width} height={this.state.height} redraw/>
    </div>
  );
  }

  refresh() {
  //   if(count%2==0){
  //     this.state.height = 500;
  //     console.log(this.state.height);
  //   this.localData = [ 1, 3, 12, 24];
  // }
  //   else{
  //     this.localData=[ 1, 3, 12, 24];
  //   }
  //   this.setState({
  //     chartData : {
  //       labels: ["April", "May", "June", "July"],
  //       datasets: [
  //         {
  //           label: "My Second dataset",
  //           fillColor: "rgba(151,187,205,0.2)",
  //           strokeColor: "rgba(151,187,205,1)",
  //           pointColor: "rgba(151,187,205,1)",
  //           pointStrokeColor: "#fff",
  //           pointHighlightFill: "#fff",
  //           pointHighlightStroke: "rgba(151,187,205,1)",
  //
  //           data: this.localData
  //         }
  //       ]
  //     }
  //   });
  //   count++;
  }

}

export default Chart;