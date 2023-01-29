import Typography, { TypographyTypeMap } from "@mui/material/Typography";

import { APP_TITLE } from "utils/constants";

const Logo = ({
  props: {
    variant,
    sx: { display, flexGrow, fontWeight },
  },
}: Partial<TypographyTypeMap<any, "span">>) => {
  return (
    <>
      <Typography
        variant={variant}
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: display,
          fontFamily: "monospace",
          fontWeight: { fontWeight },
          flexGrow: { flexGrow },
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {APP_TITLE}
      </Typography>
    </>
  );
};
export default Logo;
