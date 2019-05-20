import styled from 'styled-components';

const BannerWrapper = styled.section`
  position: relative;
  background-color: white;
  background-image: linear-gradient(to right, #d9d1d1 , white);
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default BannerWrapper;
