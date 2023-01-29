import { mswGetMoviePopularTasks_response } from "mocks/handlers";
import * as movieApi from "./movieApi";
import {
  mockExpectedApiOutput,
  mockInitialStatusMovieOutput,
  mockMovieID,
  mockQuery,
} from "mocks/mock.data";
import { mswServer } from "mocks/mockHttpServer";

describe("Api: Movie Api service", () => {
  test("MSW Testing get Popular Movies", async () => {
    mswServer.use(mswGetMoviePopularTasks_response);
    movieApi.getMoviePopular().then(async (response) => {
      await expect(response).toEqual(mockExpectedApiOutput);
    });
  });

  test("Test to get Popular Movies", () => {
    const mock = jest
      .spyOn(movieApi, "getMoviePopular")
      .mockReturnValue(Promise.resolve(mockExpectedApiOutput));
    const result = movieApi.getMoviePopular();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(Promise.resolve(mockExpectedApiOutput));
    jest.restoreAllMocks();
  });

  test("Test to get favorite movies", () => {
    const mock = jest
      .spyOn(movieApi, "getAccountFavoriteMovies")
      .mockReturnValue(Promise.resolve(mockExpectedApiOutput));
    const result = movieApi.getAccountFavoriteMovies();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(Promise.resolve(mockExpectedApiOutput));
    jest.restoreAllMocks();
  });

  test("Test to get watchlist movies", () => {
    const mock = jest
      .spyOn(movieApi, "getAccountWatchlistMovies")
      .mockReturnValue(Promise.resolve(mockExpectedApiOutput));
    const result = movieApi.getAccountWatchlistMovies();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(Promise.resolve(mockExpectedApiOutput));
    jest.restoreAllMocks();
  });

  test("Test to serach in movies", () => {
    const mock = jest
      .spyOn(movieApi, "searchRequestMovie")
      .mockReturnValue(Promise.resolve(mockExpectedApiOutput));
    const result = movieApi.searchRequestMovie({ query: mockQuery as string });
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(Promise.resolve(mockExpectedApiOutput));
    jest.restoreAllMocks();
  });

  test("Test to Mark Movie As Favorite", () => {
    const mockExpectedApiOutputFavorite = { ...mockInitialStatusMovieOutput, favorite: true };
    const mock = jest
      .spyOn(movieApi, "markAsFavorite")
      .mockReturnValue(Promise.resolve(mockExpectedApiOutputFavorite));
    const params = {
      mediaType: "movie",
      id: mockMovieID as number,
    };
    const result = movieApi.markAsFavorite(params);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(Promise.resolve(mockExpectedApiOutputFavorite));
    result.then((response) => {
      expect(response.favorite).toBeTruthy();
    });
    jest.restoreAllMocks();
  });

  test("Test to Add Movie To Watchlist", () => {
    const mockExpectedApiOutputFavorite = { ...mockInitialStatusMovieOutput, watchlist: true };
    const mock = jest
      .spyOn(movieApi, "addToWatchlist")
      .mockReturnValue(Promise.resolve(mockExpectedApiOutputFavorite));
    const params = {
      mediaType: "movie",
      id: mockMovieID as number,
    };
    const result = movieApi.addToWatchlist(params);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(Promise.resolve(mockExpectedApiOutputFavorite));
    result.then((response) => {
      expect(response.watchlist).toBeTruthy();
    });
    jest.restoreAllMocks();
  });

  test("Test to get Movie Status", () => {
    const mock = jest
      .spyOn(movieApi, "getAccountMovieStatus")
      .mockReturnValue(Promise.resolve(mockInitialStatusMovieOutput));
    const result = movieApi.getAccountMovieStatus(mockMovieID as number);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(Promise.resolve(mockInitialStatusMovieOutput));
    result.then((response) => {
      expect(response.favorite).toBeFalsy();
      expect(response.watchlist).toBeFalsy();
    });

    //After Change Movie Status, Mark As Favorite and  Add To Watchlist
    const mockExpectedApiOutputF = { ...mockInitialStatusMovieOutput, favorite: true };
    const mockExpectedApiOutputW = { ...mockInitialStatusMovieOutput, watchlist: true };
    jest.spyOn(movieApi, "markAsFavorite").mockReturnValue(Promise.resolve(mockExpectedApiOutputF));
    jest.spyOn(movieApi, "addToWatchlist").mockReturnValue(Promise.resolve(mockExpectedApiOutputW));

    const params = {
      mediaType: "movie",
      id: mockMovieID as number,
    };
    const resultStatusMovieF = movieApi.markAsFavorite(params);
    const resultStatusMovieW = movieApi.addToWatchlist(params);

    resultStatusMovieF.then((response) => {
      expect(response.favorite).toBeTruthy();
      expect(response.watchlist).toBeFalsy();
    });
    resultStatusMovieW.then((response) => {
      expect(response.favorite).toBeFalsy();
      expect(response.watchlist).toBeTruthy();
    });

    jest.restoreAllMocks();
  });
});
