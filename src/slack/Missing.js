import React from "react";
import styled from "styled-components";

const Missing = () => {
  return <MissingContainer>Page Not Found</MissingContainer>;
};

export default Missing;

const MissingContainer = styled.div`
  height: 100vh;
`;
