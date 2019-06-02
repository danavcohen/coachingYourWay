import React, { Component } from "react";
import Box from "../Banner";

const charStyle = {
  position: "absolute",
  bottom: "6%",
  left: "0",
  // height:"auto",
  zIndex: "1",
  width: "50vh",
  height: "50vh"
};
var LineChart = require("react-chartjs").Line;

function mymyCount() {
  return 0;
}

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
// var chartOptions={
//
//   ///Boolean - Whether grid lines are shown across the chart
//   scaleShowGridLines : true,
//
//   //String - Colour of the grid lines
//   scaleGridLineColor : "rgba(0,0,0,.05)",
//
//   //Number - Width of the grid lines
//   scaleGridLineWidth : 1,
//
//   //Boolean - Whether to show horizontal lines (except X axis)
//   scaleShowHorizontalLines: false,
//
//   //Boolean - Whether to show vertical lines (except Y axis)
//   scaleShowVerticalLines: false,
//
//   //Boolean - Whether the line is curved between points
//   bezierCurve : true,
//
//   //Number - Tension of the bezier curve between points
//   bezierCurveTension : 0.4,
//
//   //Boolean - Whether to show a dot for each point
//   pointDot : true,
//
//   //Number - Radius of each point dot in pixels
//   pointDotRadius : 10,
//
//   //Number - Pixel width of point dot stroke
//   pointDotStrokeWidth : 8,
//
//   //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
//   pointHitDetectionRadius : 20,
//
//   //Boolean - Whether to show a stroke for datasets
//   datasetStroke : true,
//
//   //Number - Pixel width of dataset stroke
//   datasetStrokeWidth : 8,
//
//   //Boolean - Whether to fill the dataset with a color
//   datasetFill : false,
// // {% raw %}
// //String - A legend template
//    legendTemplate : '<ul className=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
// //  legendTemplate : '',
//   scaleLineColor: 'transparent',
//   showScale: false,
//   //showTooltips: false,
//   responsive: false,
//   tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= 0%>",
//   maintainAspectRatio: false,
// // {% endraw %}
//
//   // tooltips: {
//   //   enabled: true,
//   //   mode: 'single',
//   //   callbacks: {
//   //     label: function(tooltipItems, data) {
//   //       return tooltipItems.yLabel + ' €';
//   //     }
//   //   }
//   // },
//
// //Boolean - Whether to horizontally center the label and point dot inside the grid
//   offsetGridLines : false,
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero: true,
//       }
//     }],
//     xAxes: [{
//       ticks: {
//         autoSkip: false,
//       }
//     }]
//   }
//
//
//
// };

var customTooltips = function(tooltip) {
  // Tooltip Element
  var tooltipEl = document.getElementById("chartjs-tooltip");
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    tooltipEl.innerHTML = "<table></table>";
    this._chart.canvas.parentNode.appendChild(tooltipEl);
  }
  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }
  // Set caret Position
  tooltipEl.classList.remove("above", "below", "no-transform");
  if (tooltip.yAlign) {
    tooltipEl.classList.add(tooltip.yAlign);
  } else {
    tooltipEl.classList.add("no-transform");
  }

  function getBody(bodyItem) {
    return bodyItem.lines;
  }

  // Set Text
  if (tooltip.body) {
    var titleLines = tooltip.title || [];
    var bodyLines = tooltip.body.map(getBody);
    var innerHtml = "<thead>";
    titleLines.forEach(function(title) {
      innerHtml += "<tr><th>" + title + "</th></tr>";
    });
    innerHtml += "</thead><tbody>";
    bodyLines.forEach(function(body, i) {
      var colors = tooltip.labelColors[i];
      var style = "background:" + colors.backgroundColor;
      style += "; border-color:" + colors.borderColor;
      style += "; border-width: 2px";
      var span = "<span class=\"chartjs-tooltip-key\" style=\"" + style + "\"></span>";
      innerHtml += "<tr><td>" + span + body + "</td></tr>";
    });
    innerHtml += "</tbody>";
    var tableRoot = tooltipEl.querySelector("table");
    tableRoot.innerHTML = innerHtml;
  }
  var positionY = this._chart.canvas.offsetTop;
  var positionX = this._chart.canvas.offsetLeft;
  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
  tooltipEl.style.fontSize = tooltip.bodyFontSize + "px";
  tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
  tooltipEl.style.padding = tooltip.yPadding + "px " + tooltip.xPadding + "px";
};

class Chart extends Component {
  mymytest = 0;
  mycharTest = ["hello world", "hello happy world", "hello world2", "hello happy world2", "hello world3", "hello happy world3"];
  localData;

  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.state = {
      width: 920, height: 300,
      chartData: {
        labels: [0,1,2],
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
            data: [1,  15,   35]
          }
        ]
      },
      options: {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: false,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: false,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 10,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 8,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 8,

        //Boolean - Whether to fill the dataset with a color
        datasetFill: false,
// {% raw %}
//String - A legend template
        legendTemplate: "<ul className=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
//  legendTemplate : '',
        scaleLineColor: "transparent",
        showScale: false,
        //showTooltips: false,
        showTooltips: true,
        tooltipEvents: [],

        onAnimationComplete: function() {
          this.showTooltip(this.datasets[0].points, true);
        },

        responsive: false,
        tooltipFontColor: "blue",
        tooltipFontSize:18,
        tooltipFillColor: "white",
         tooltipTemplate:"<%if (label>=0){%><%=label%>: " +
           "<%=  [ 'hello happy world'," +
           "  'hello happy world2"+
           " this is my story\nblablabla'," +
           "  'hello happy world3'][label]%><%}%>",
        maintainAspectRatio: false,
        // tooltips: {
        //   callbacks: {
        //     beforeTitle:function (tooltipItems, data) {
        //       console.log("hello")
        //       return "hello"
        //     },
        //     title:function (tooltipItems, data) {
        //       console.log("hello")
        //       return "hello"
        //     },
        //     label: function (tooltipItems, data) {
        //       console.log("hello")
        //       return "hello"
        //     }
        //   }
        // },
// {% endraw %}

        // tooltips: {
        //   enabled: true,
        //   mode: 'single',
        //   callbacks: {
        //     label: function(tooltipItems, data) {
        //       return tooltipItems.yLabel + ' €';
        //     }
        //   }
        // },

//Boolean - Whether to horizontally center the label and point dot inside the grid
        offsetGridLines: false,
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

      }
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  updateWindowDimensions() {
    var width = parseInt(window.innerWidth * (70 / 100));
    var height = parseInt(window.innerHeight * (70 / 100));
    // this.setState({ width:width, height: height });
    console.log(window.innerHeight, window.innerWidth);
    console.log(height, width);
  }
  componentWillMount() {
    // LineChart.pluginService.register({
    //   beforeRender: function (chart) {
    //     if (chart.config.options.showAllTooltips) {
    //       chart.pluginTooltips = [];
    //       chart.config.data.datasets.forEach(function (dataset, i) {
    //         chart.getDatasetMeta(i).data.forEach(function (sector, j) {
    //           chart.pluginTooltips.push(new Chart.Tooltip({
    //             _chart: chart.chart,
    //             _chartInstance: chart,
    //             _data: chart.data,
    //             _options: chart.options.tooltips,
    //             _active: [sector]
    //           }, chart));
    //         });
    //       });
    //       // turn off normal tooltips
    //       chart.options.tooltips.enabled = false;
    //     }
    //   }, afterDraw: function (chart, easing) {
    //     if (chart.config.options.showAllTooltips) {
    //       // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
    //       if (!chart.allTooltipsOnce) {
    //         if (easing !== 1) return;
    //         chart.allTooltipsOnce = true;
    //       }
    //       chart.options.tooltips.enabled = true;
    //       Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
    //         tooltip.initialize();
    //         tooltip.update(); // we don't actually need this since we are not animating tooltips
    //         tooltip.pivot();
    //         tooltip.transition(easing).draw();
    //       });
    //       chart.options.tooltips.enabled = false;
    //     }
    //   }
    // });
  }
  componentDidMount() {
    setInterval(this.refresh, 3000);
    this.updateWindowDimensions();

  }

  render() {
    return (
      <div style={charStyle}>
      {/*<div className="chart-container" style={{ position: "relative", height: "80vh", width: "100vw" }}>*/}
        {/*<LineChart data={this.state.chartData} options={chartOptions} width={this.state.width} height={this.state.height}  redraw/>*/}
        <LineChart data={this.state.chartData} options={this.state.options} width={"600"} height={"300"}/>
      </div>

    );
  }

// <div style={charStyle}></div>
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
//     this.setState({   options:{
//
//         ///Boolean - Whether grid lines are shown across the chart
//         scaleShowGridLines : true,
//
//         //String - Colour of the grid lines
//         scaleGridLineColor : "rgba(0,0,0,.05)",
//
//         //Number - Width of the grid lines
//         scaleGridLineWidth : 1,
//
//         //Boolean - Whether to show horizontal lines (except X axis)
//         scaleShowHorizontalLines: false,
//
//         //Boolean - Whether to show vertical lines (except Y axis)
//         scaleShowVerticalLines: false,
//
//         //Boolean - Whether the line is curved between points
//         bezierCurve : true,
//
//         //Number - Tension of the bezier curve between points
//         bezierCurveTension : 0.4,
//
//         //Boolean - Whether to show a dot for each point
//         pointDot : true,
//
//         //Number - Radius of each point dot in pixels
//         pointDotRadius : 10,
//
//         //Number - Pixel width of point dot stroke
//         pointDotStrokeWidth : 8,
//
//         //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
//         pointHitDetectionRadius : 20,
//
//         //Boolean - Whether to show a stroke for datasets
//         datasetStroke : true,
//
//         //Number - Pixel width of dataset stroke
//         datasetStrokeWidth : 8,
//
//         //Boolean - Whether to fill the dataset with a color
//         datasetFill : false,
// // {% raw %}
// //String - A legend template
//         legendTemplate : '<ul className=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
// //  legendTemplate : '',
//         scaleLineColor: 'transparent',
//         showScale: false,
//         //showTooltips: false,
//         responsive: false,
//         // tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%=this.mymytest%>",
//         maintainAspectRatio: false,
//         tooltips:{
//         callbacks: {
//           label: function(tooltipItem,d) {
//             return " and so worth it !";
//           }
//         }
//       },
// // {% endraw %}
//
//         // tooltips: {
//         //   enabled: true,
//         //   mode: 'single',
//         //   callbacks: {
//         //     label: function(tooltipItems, data) {
//         //       return tooltipItems.yLabel + ' €';
//         //     }
//         //   }
//         // },
//
// //Boolean - Whether to horizontally center the label and point dot inside the grid
//         offsetGridLines : false,
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true,
//             }
//           }],
//           xAxes: [{
//             ticks: {
//               autoSkip: false,
//             }
//           }]
//         }
//
//       }})
  }

}

export default Chart;