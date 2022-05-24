import React from "react";
import styled from "styled-components";

export default function SidebarOption({ title, Icon }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="medium" styled={{ padding: 10 }} />}
      {title && <span>{title}</span>}
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px;
  color: #ea80fc;

  > :hover {
    font-size: larger;
    color: white;
    text-shadow: 2px 2px 3px #e1bee7;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }
  > .MuiSvgIcon-root {
    margin-right: 5px;
    color: #d500f9;
  }
`;
