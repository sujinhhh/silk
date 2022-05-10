import React from "react";
import styled from "styled-components";

function Footer() {
  const today = new Date();
  return (
    <FooterContainer> Copyright &copy; {today.getFullYear()}</FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(120deg, #434343 0%, black 100%);
  color: white;
`;
