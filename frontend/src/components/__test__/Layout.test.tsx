import HomeIcon from "@mui/icons-material/Home";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { LeftDrawer } from "../layout/drawer/LeftDrawer";

const MockLeftDrawerItem = () => (
  <ListItem>
    <ListItemIcon>
      <HomeIcon />
    </ListItemIcon>
    <ListItemText primary="Home" />
  </ListItem>
);

test("renders left drawer", () => {
  render(
    <LeftDrawer open={true} toggleDrawer={() => undefined}>
      <MockLeftDrawerItem />
    </LeftDrawer>
  );
  expect(screen.getByRole("listitem", { hidden: true })).toBeInTheDocument();
});

test("renders left drawer closed", () => {
  render(
    <LeftDrawer open={false} toggleDrawer={() => undefined}>
      <MockLeftDrawerItem />
    </LeftDrawer>
  );
  expect(screen.getByRole("listitem", { hidden: true })).toBeInTheDocument();
});
