import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { SurveyTitle } from "./title/SurveyTitle";

type Props = {
  title: string;
  content: JSX.Element[];
};

export const SurveyContainer: React.FC<Props> = ({ content, title }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        justifyContent: "space-evenly",
        position: "relative",
        top: "50px",
      }}
    >
      <Grid container spacing={3}>
        <SurveyTitle title={title} />
        {content.map((child) => (
          <Grid item key={child.type} xs={12} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
              }}
            >
              {child}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
