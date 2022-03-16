import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  to: string;
  linkValue: string
};

const useStyles = makeStyles({
  surveyLink: { textDecoration: "none" },
});

export const StyledLink: React.FC<Props> = ({ to, children, linkValue }) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.surveyLink} style={{ color: "#1976d2" }}>
      <ListItem>
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={linkValue} />
      </ListItem>
    </Link>
  );
}
