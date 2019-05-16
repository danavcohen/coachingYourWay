import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from '../../../components/UI/Container';
import SocialProfile from '../SocialProfile';
import BannerWrapper from './banner.style';

import { SOCIAL_PROFILES } from '../../../data/Portfolio/data';
import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight';
import PersonImage from '../../../assets/image/portfolio/person.png';
var LineChart = require("react-chartjs").Line;
var chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      // data: [65, 59, 80, 81, 56, 55, 40]
      data: [0, 0, 0, 0, 0, 0, 0]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      //data: [28, 48, 40, 19, 86, 27, 90]
      data: [0, 0, 0, 0, 0, 0, 0]
    }
  ]
};
var chartOptions={

  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,

  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth : 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,

  //Boolean - Whether the line is curved between points
  bezierCurve : true,

  //Number - Tension of the bezier curve between points
  bezierCurveTension : 0.4,

  //Boolean - Whether to show a dot for each point
  pointDot : true,

  //Number - Radius of each point dot in pixels
  pointDotRadius : 4,

  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 1,

  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  pointHitDetectionRadius : 20,

  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,

  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 10,

  //Boolean - Whether to fill the dataset with a color
  datasetFill : false,
// {% raw %}
//String - A legend template
legendTemplate : "<ul className=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
// {% endraw %}

//Boolean - Whether to horizontally center the label and point dot inside the grid
offsetGridLines : false,




scales: {
  xAxes: [
    {
      ticks: {
        callback: function(label, index, labels) {
          return label.toFixed(2) + "%";
        }
      }
    }
  ],
    yAxes: [
    {
      ticks: {
        callback: function(label, index, labels) {
          return label;
        },
        fontSize: 18,
        fontColor: 'black'
      },
      display: true,
    }
  ]
}


  // scales: {
  //   labelString:"jkjkk",
  //   display: true
    // yAxes: [{
    //   display: false
    // }],
    // xAxes: [{
    //   display: true
    // }]
 // }
};
//
// var MyComponent = React.createClass({
//   render: function() {
//     return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
//   }
// });
const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Hello, I’m" {...greetingStyle} />
            <Heading content="Mat Helme" {...nameStyle} />
            <Heading content="Visual System Designer my" {...designationStyle} />
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: '#3444f1' }}
                size={22}
              />
              <Heading content="Illustrative Lead at Google" {...roleStyle} />
            </Box>
            <Text
              content="Focused on defining principle driven visual systems that scale to global products and brands. Lately, I've been putting a lot of thought into personalized illustrative languages and getting machines to draw."
              {...aboutStyle}
            />
            <SocialProfile items={SOCIAL_PROFILES} />
          </Box>

          {/*<Box {...imageArea} className="image_area">*/}
            {/*/!*<Image src={PersonImage} alt="Mat Helme" />*!/*/}
          {/*</Box>*/}
        <LineChart data={chartData} options={chartOptions} width="600" height="250"/>


        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  greetingStyle: {
    as: 'h3',
    color: 'black',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: 'black',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
  },
  designationStyle: {
    as: 'h3',
    color: 'black',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: 'color',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: 'color',
    lineHeight: '1.5',
    mb: '50px',
  },
};

export default BannerSection;
