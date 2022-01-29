import * as React from "react";
import Typography from "@mui/material/Typography";

export const Title: React.FC = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};
