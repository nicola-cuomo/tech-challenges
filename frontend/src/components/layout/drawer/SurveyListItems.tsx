import EventIcon from "@mui/icons-material/Event";
import Filter1Icon from "@mui/icons-material/Filter1";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import { Divider } from "@mui/material";
import * as React from "react";
import { StyledLink } from "./StyledLink";

export function SurveyListItems() {
  return (
    <div>
      <StyledLink to="/" linkValue="Home">
        <HomeIcon />
      </StyledLink>
      <Divider />
      <StyledLink to="qcm" linkValue="QCM">
        <ListIcon />
      </StyledLink>
      <StyledLink to="numeric" linkValue="Numeric">
        <Filter1Icon />
      </StyledLink>
      <StyledLink to="date" linkValue="Date">
        <EventIcon />
      </StyledLink>
    </div >
  );
}
