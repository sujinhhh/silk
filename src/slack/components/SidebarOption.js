import React from "react";
import styled from "styled-components";

export default function SidebarOption({ title, Icon }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="small" styled={{ padding: 10 }} />}
      {title && <span>{title}</span>}
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: darkmagenta;
  > .MuiSvgIcon-root {
    margin-right: 5px;
  }
`;
