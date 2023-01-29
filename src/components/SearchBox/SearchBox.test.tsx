import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBox from "./SearchBox";

describe("Component: Search Box", () => {
  test("render", () => {
    const setQuerySearchMock = jest.fn();
    render(<SearchBox setQuerySearch={setQuerySearchMock} />);
    const searchInput = screen.getByRole("textbox", { name: "Search ..." });
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "Query");
    expect(searchInput).toHaveValue("Query");

    fireEvent.change(searchInput, { target: { value: "search" } });
    expect(searchInput).toHaveValue("search");
  });
});
