import React from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Container from "../../../components/UI/Container";
import SocialProfile from "../SocialProfile";
import BannerWrapper from "./banner.style";
import Chart2 from "../Chart2";
import MainHead from "../MainHead";
import { SOCIAL_PROFILES } from "../../../data/Portfolio/data";
import { cornerDownRight } from "react-icons-kit/feather/cornerDownRight";
import PersonImage from "../../../assets/image/portfolio/yossiTry.png";

const imgShare = {
  marginLeft: "auto",
  width: "50%"
};

const mainBox = {
  marginTop: "auto",
  height: "80vh",
  position: "relative",
};
const imgPerson = {
  marginLeft:"auto",
  height: "74vh",
  width: "74vh",
};
const containerStyle = {
  height: "80vh"
};

const BannerSection = ({
                         row,
                         contentArea,
                         imageArea,
                         greetingStyle,
                         nameStyle,
                         designationStyle,
                         aboutStyle,
                         roleStyle,
                         roleWrapper
                       }) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row} style={mainBox}>
          <div style={{width:'50%'}}>
          <MainHead/>
            <Chart2/>
          <SocialProfile items={SOCIAL_PROFILES} style={{marginTop:'51vh',marginLeft: 'auto'}}/>
          </div>
          <Box {...contentArea} style={imgShare}>
            {/*<Heading content="Hello, I’m" {...greetingStyle} />*/}
            {/*<Heading content="Visual System Designer my" {...designationStyle} />*/}

            <Box {...imageArea} className="image_area" style={{ marginTop: "auto"}}>
              <Image src={PersonImage} alt="Mat Helme" style={imgPerson}/>
            </Box>

            {/*<Box {...roleWrapper}>*/}
            {/*<Icon*/}
            {/*icon={cornerDownRight}*/}
            {/*style={{ color: '#3444f1' }}*/}
            {/*size={22}*/}
            {/*/>*/}
            {/*/!*<Heading content="Illustrative Lead at Google" {...roleStyle} />*!/*/}
            {/*</Box>*/}

            {/*<Text*/}
            {/*content="Focused on defining principle driven visual systems that scale to global products and brands. Lately, I've been putting a lot of thought into personalized illustrative languages and getting machines to draw."*/}
            {/*{...aboutStyle}*/}
            {/*/>*/}

          </Box>




          {/*<Box {...imageArea} className="image_area">*/}
          {/*<Image src={PersonImage} alt="Mat Helme" />*/}
          {/*</Box>*/}

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
  roleWrapper: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "stretch"
  },
  contentArea: {
    width: ["100%", "100%", "50%", "40%"],
    p: ["65px 0 80px 0", "65px 0 80px 0", "80px 0 60px 0", "0"],
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column"
  },
  imageArea: {
    width: ["100%", "100%", "50%", "60%"],
    flexBox: true,
    alignItems: "flex-end"
  },
  greetingStyle: {
    as: "h3",
    color: "black",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "500",
    mb: "8px"
  },
  nameStyle: {
    as: "h4",
    color: "black",
    fontSize: ["38px", "38px", "44px", "50px", "53px"],
    fontWeight: "500",
    mb: "6px"
  },
  designationStyle: {
    as: "h3",
    color: "black",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "700",
    mb: ["30px", "30px", "25px", "30px", "30px"]
  },
  roleWrapper: {
    flexBox: true,
    mb: "28px"
  },
  roleStyle: {
    as: "h4",
    fontSize: ["18px", "18px", "18px", "18px", "20px"],
    fontWeight: "500",
    color: "color",
    mb: "0",
    ml: "10px"
  },
  aboutStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "color",
    lineHeight: "1.5",
    mb: "50px"
  }
};

export default BannerSection;
