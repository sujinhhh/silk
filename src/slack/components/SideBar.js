import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FiberManualRecord,
  InboxTwoTone,
  InsertComment,
  AccessAlarmTwoTone,
} from "@material-ui/icons";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";

function SideBar() {
  return (
    <SidbarContainer>
      <SidbarHeader>
        <SidbarInfor>
          <h2>Web Developer</h2>
          <h3>
            <FiberManualRecord />
            Sujin Lee
          </h3>
        </SidbarInfor>
        <CreateIcon />
      </SidbarHeader>
      <Link to="/air">
        <SidebarOption Icon={InsertComment} title="Airbnb" />
      </Link>
      <Link to="/list">
        <SidebarOption Icon={AccessAlarmTwoTone} title="ToDo List" />
      </Link>
      <SidebarOption Icon={InboxTwoTone} title="Mentions & reactions" />
    </SidbarContainer>
  );
}

export default SideBar;

const SidbarContainer = styled.div`
  color: white;
  flex: 0.5;
  background-image: linear-gradient(35deg, #434343 0%, black 100%);
  max-width: 260px;
  margin-top: 60px;
`;
const SidbarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #311b92;
  border-top: 1px solid #311b92;
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: wheat;
    border-radius: 999px;
  }
`;
const SidbarInfor = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 13px;
    margin-top: 1px;
    margin-right: 2px;
    color: #512da8;
  }
`;
