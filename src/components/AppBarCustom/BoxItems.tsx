import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { RoutePropsType } from "types/Router.types";
import { AppBarPropsType } from "types/App.types";
import { MenuItemTitles } from "utils/constants";

const BoxItems = ({ props: { handleCloseNavMenu } }: AppBarPropsType) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {MenuItemTitles.map(({ title, path }: Partial<RoutePropsType>, index: number) => (
          <Button
            key={index}
            onClick={() => handleCloseNavMenu(path)}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {title}
          </Button>
        ))}
      </Box>
    </>
  );
};
export default BoxItems;
