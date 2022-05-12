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
  padding-top: 100px;
`;
