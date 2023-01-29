import { mockEndpoint } from "mocks/mock.data";
import * as baseApi from "./baseApi";

describe("Api: Base Api service", () => {
  test("Testing method baseRequest", () => {
    const mock = jest.spyOn(baseApi, "baseRequest").mockReturnValue(Promise.resolve());
    baseApi.baseRequest({ endpoint: mockEndpoint, queryParams: { language: "en-US" } });
    expect(mock).toHaveBeenCalledTimes(1);
    jest.restoreAllMocks();
  });
});
