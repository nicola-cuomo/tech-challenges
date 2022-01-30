import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { StyleAppBar } from "./layout/AppBar";
import { Copyright } from "./layout/Copyright";
import { LeftDrawer } from "./layout/drawer/LeftDrawer";
import { SurveyListItems } from "./layout/drawer/SurveyListItems";
import { SurveyRoutes } from "./layout/Routes";

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
          <SurveyRoutes />
          <Copyright sx={{ pt: 4, alignSelf: "flex-end" }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
