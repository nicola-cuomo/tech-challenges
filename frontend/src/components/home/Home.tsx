import { Container, Grid, Paper } from "@mui/material";
import { TitleSection } from "../common/TitleSection";
import { TableSurvey } from "./TableSurvey";

export function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <TitleSection title={"All Surveys"} />
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <TableSurvey />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
