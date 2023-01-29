import Grid from "@mui/material/Grid";

import { PropsType } from "types/App.types";

const CardList = ({ children }: PropsType) => {
  return (
    <Grid container spacing={1.5} paddingTop={2}>
      {children}
    </Grid>
  );
};

export default CardList;
