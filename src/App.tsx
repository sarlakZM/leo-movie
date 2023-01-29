import { orange, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import RouteHandler from "components/RouteHandler";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    },
    secondary: {
      // This is purple.A400 as hex.
      main: purple[400],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouteHandler />
    </ThemeProvider>
  );
}

export default App;
