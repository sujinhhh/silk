import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  InboxTwoTone,
  InsertComment,
  AccessAlarmTwoTone,
  DataUsage,
  InsertEmoticonRounded,
} from "@material-ui/icons";
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
      <Link to="/fetch">
        <SidebarOption Icon={DataUsage} title="Fetch Data" />
      </Link>
      <Link to="/blog">
        <SidebarOption Icon={InboxTwoTone} title="Blog" />
      </Link>
      {/* <Link to="/basic">
        <SidebarOption Icon={InsertEmoticonRounded} title="Basic" />
      </Link> */}
    </SidbarContainer>
  );
}

export default SideBar;

const SidbarContainer = styled.div`
  color: white;
  flex: 0.5;
  background-image: linear-gradient(35deg, #434343 0%, black 100%);
  max-width: 260px;
  min-width: 150px;
  padding-top: 120px;
`;
