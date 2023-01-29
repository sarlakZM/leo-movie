import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import MenuItems from "./MenuItems";
import BoxItems from "./BoxItems";
import Logo from "./Logo";

const AppBarCustom = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path?: string) => {
    navigate(path as string);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo
            props={{
              variant: "h5",
              sx: { display: { xs: "none", md: "flex" } },
              flexGrow: 0,
              fontWeight: 900,
            }}
          />
          <BoxItems props={{ handleCloseNavMenu }} />

          <MenuItems props={{ handleCloseNavMenu, handleOpenNavMenu, anchorElNav }} />
          <Logo
            props={{
              variant: "h5",
              sx: { display: { xs: "flex", md: "none" } },
              flexGrow: 1,
              fontWeight: 700,
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarCustom;
