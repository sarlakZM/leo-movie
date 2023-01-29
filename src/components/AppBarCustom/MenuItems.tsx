import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { RoutePropsType } from "types/Router.types";
import { AppBarPropsType } from "types/App.types";
import { MenuItemTitles } from "utils/constants";
import StyledLink from "./MenuItems.styles";

const MenuItems = ({
  props: { handleOpenNavMenu, handleCloseNavMenu, anchorElNav },
}: AppBarPropsType) => {
  return (
    <>
      <Box sx={{ flexGrow: 0.5, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={() => handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {MenuItemTitles.map(({ title, path }: Partial<RoutePropsType>, index: number) => (
            <MenuItem key={index} onClick={() => handleCloseNavMenu(path)}>
              <Typography textAlign="center">
                <StyledLink key={index} to={path as string} relative="path">
                  {title}
                </StyledLink>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};
export default MenuItems;
