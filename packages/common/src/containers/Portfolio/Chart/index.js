import React, { Component } from "react";
import Box from "../Banner";
const charStyle = {
  height: "100%",
  marginTop: "10%"
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
  pointDotRadius : 6,

  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 2,

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
//   legendTemplate : '<ul className=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
  legendTemplate : '',
  scaleLineColor: 'transparent',
  showScale: false,
  showTooltips: false,
  responsive: false,
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
    this.state = {
       chartData : {
        labels: ["April", "May", "June", "July"],
        datasets: [

          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "#373cff",
            // pointColor: "rgba(151,187,205,1)",
            pointColor: "#fff",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [ 1, 3, 12, 24]
          }
        ]
      }
    };
  }
  componentDidMount() {
    setInterval(this.refresh, 3000);
  }
  render() {
    return(
    <div style={charStyle}>
      <LineChart data={this.state.chartData} options={chartOptions} width="670" height="600"/>
    </div>
  );
  }

  refresh() {
    if(count%2==0){
    this.localData = [ 1, 3, 12, 24];
  }
    else{
      this.localData=[ 1, 3, 12, 24];
    }
    this.setState({
      chartData : {
        labels: ["April", "May", "June", "July"],
        datasets: [
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",

            data: this.localData
          }
        ]
      }
    });
    count++;
  }

}

export default Chart;