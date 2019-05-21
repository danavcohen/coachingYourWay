import styled from 'styled-components';

export const SocialProfileWrapper = styled.div`
margin-right: auto;
 position: absolute;
 top:94%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
//position: relative;
export const SocialProfileItem = styled.div`
  margin-right: 18px;
  a {
    color: black;
    transition: 0.15s ease-in-out;
    &:hover {
      color: #3444f1;
    }
  }
`;
