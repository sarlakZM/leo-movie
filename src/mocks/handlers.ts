import { rest } from "msw";
import { mockExpectedApiOutput } from "./mock.data";
import { API_KEY, BASE_URL, SESSION_ID } from "utils/constants";

const url_ = `${BASE_URL}/movie/popular`;
export const mswGetMoviePopularTasks_response = rest.get(url_, async (req, res, ctx) => {
  req.url.searchParams.append("session_id", SESSION_ID);
  req.url.searchParams.append("api_key", API_KEY);
  return res(ctx.status(200), ctx.json([mockExpectedApiOutput]));
});

export const mswGetMoviePopularTasks_response_local = rest.get("/", async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json([mockExpectedApiOutput]));
});

export const handlers = [mswGetMoviePopularTasks_response, mswGetMoviePopularTasks_response_local];
