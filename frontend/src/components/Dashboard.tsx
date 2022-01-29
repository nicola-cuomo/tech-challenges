import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { StyleAppBar } from "./AppBar";
import { Copyright } from "./Copyright";
import { LeftDrawer } from "./drawer/LeftDrawer";
import { SurveyListItems } from "./drawer/SurveyListItems";
import { SurveyRoutes } from "./Routes";

const mdTheme = createTheme();

function DashboardContent() {
  const matches = useMediaQuery(mdTheme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setOpen(!matches);
  }, [matches]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <StyleAppBar open={open} toggleDrawer={toggleDrawer} />
          <LeftDrawer open={open} toggleDrawer={toggleDrawer}>
            <SurveyListItems />
          </LeftDrawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <SurveyRoutes />
            <Copyright sx={{ pt: 4, alignSelf: "flex-end" }} />
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
