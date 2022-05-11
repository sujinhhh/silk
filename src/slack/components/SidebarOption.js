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
  color: darkmagenta;
  > .MuiSvgIcon-root {
    margin-right: 5px;
    color: #d500f9;
  }
`;
