import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

export const SurveyTitle: React.FC<Props> = ({ title }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4">{title}</Typography>
    </Grid>
  );
};
