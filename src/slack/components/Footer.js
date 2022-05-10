import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterContainer> 2022 &copy</FooterContainer>;
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  background-image: linear-gradient(120deg, #434343 0%, black 100%);
  color: white;
`;
