import EventIcon from "@mui/icons-material/Event";
import Filter1Icon from "@mui/icons-material/Filter1";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import { Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { StyledLink } from "./StyledLink";

export function SurveyListItems() {
  return (
    <div>
      <StyledLink to="/">
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </StyledLink>
      <Divider />
      <StyledLink to="qcm">
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="QCM" />
        </ListItem>
      </StyledLink>
      <StyledLink to="numeric">
        <ListItem button>
          <ListItemIcon>
            <Filter1Icon />
          </ListItemIcon>
          <ListItemText primary="Numeric" />
        </ListItem>
      </StyledLink>
      <StyledLink to="date">
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Date" />
        </ListItem>
      </StyledLink>
    </div>
  );
}
