import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  createTheme,
  styled,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { drawerWidth } from "./Constants";
import { Copyright } from "./Copyright";
import { LeftDrawer } from "./drawer/LeftDrawer";
import { SurveyListItems } from "./drawer/SurveyListItems";
import { SurveyDetails } from "./surveys/SurveyDetails";
import { SurveyList } from "./surveys/SurveyList";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                IWD Surveys
              </Typography>
              <IconButton color="inherit" size="large">
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
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
            <Routes>
              <Route path="/" element={<SurveyList />} />
              <Route path="qcm" element={<SurveyList type="QCM" />} />
              <Route path="numeric" element={<SurveyList type="NUMERIC" />} />
              <Route path="date" element={<SurveyList type="DATE" />} />
              <Route path="surveyDetail">
                <Route path=":code" element={<SurveyDetails />} />
              </Route>
            </Routes>
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
