import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px;
`;

export const Banner = styled.div`
img {
border-radius: 40px;
width: 100%
}
`;

export const Search = styled.div`
border-radius: 40px;
color: #ffffff;
width: 80%;
line-height: 45px;
margin: 15px;
`;

export const Title = styled.div`
  margin: 15px;
  border-radius: 10px;
  background-color: #1AB394;
  height: 50px;
  text-align: -webkit-center;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  line-height: 45px;
  `;


export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
