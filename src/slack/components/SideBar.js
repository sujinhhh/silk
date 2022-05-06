import React from "react";
import styled from "styled-components";
import { FiberManualRecord } from "@material-ui/icons";

function SideBar() {
  return (
    <SidbarContainer>
      <SidbarHeader>
        <SidbarInfor>
          <h2>info</h2>
          <h3>
            <FiberManualRecord />
          </h3>
        </SidbarInfor>
      </SidbarHeader>
    </SidbarContainer>
  );
}

export default SideBar;

const SidbarContainer = styled.div`
  color: white;
  flex: 0.3;
  background-image: linear-gradient(35deg, #434343 0%, black 100%);
  max-width: 260px;
  min-width: 200px;
  margin-top: 60px;
`;
const SidbarHeader = styled.div``;
const SidbarInfor = styled.div`
  > h2 {
  }
`;
