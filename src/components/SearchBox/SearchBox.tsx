import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { SearchBoxPropsType } from "types/App.types";
import SearchBoxStyles from "./SearchBox.styles";

const SearchBox = ({ setQuerySearch }: SearchBoxPropsType<string>) => {
  return (
    <SearchBoxStyles>
      <TextField
        id="search-input"
        name="search-input"
        label="Search ..."
        onChange={(e) => setQuerySearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </SearchBoxStyles>
  );
};
export default SearchBox;
