import { Container, Grid, Paper } from "@mui/material";
import { SurveyTitle } from "../common/SurveyTitle";

type Props = {
  title: string;
};

export const SurveyContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <SurveyTitle title={title} />
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
