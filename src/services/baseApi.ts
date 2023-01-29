import { RequestType } from "types/Api.types";
import { matchUrlWithQueryParams } from "utils/utils";

const baseRequest = async ({
  endpoint,
  method = "GET",
  headers = {},
  queryParams = {},
  body,
}: RequestType) => {
  const url = matchUrlWithQueryParams(endpoint, queryParams);
  const options: { [key: string]: any } = {
    method: method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response: Response = await fetch(url, options);
  const checkExistError = await response.json();
  return response.ok
    ? checkExistError
    : !checkExistError?.success
    ? Promise.reject(checkExistError)
    : Promise.reject(response);
};

//TODO: UnUsed Method
const getNewAuthenticationToken = () => {
  const endpoint = `authentication/token/new`;
  return baseRequest({ endpoint: endpoint, queryParams: { language: "en-US" } });
};

const getNewAuthenticationSession = async () => {
  const token_detail = await getNewAuthenticationToken();
  const { request_token } = token_detail;

  const endpoint = `authentication/session/new`;
  return baseRequest({
    endpoint: endpoint,
    method: "POST",
    body: { request_token: request_token },
  });
};

const getNewAuthenticationGuestSession = async () => {
  const token_detail = await getNewAuthenticationToken();
  const { request_token } = token_detail;
  const endpoint = `authentication/guest_session/new`;
  return baseRequest({
    endpoint: endpoint,
    method: "GET",
    body: { request_token: request_token },
  });
};

const getCurrentAccountDetails = async () => {
  const session_detail = await getNewAuthenticationSession();
  const { session_id } = session_detail;
  const endpoint = `account`;
  return baseRequest({
    endpoint: endpoint,
    queryParams: { session_id: session_id },
  });
};

export {
  baseRequest,
  getNewAuthenticationToken,
  getNewAuthenticationSession,
  getNewAuthenticationGuestSession,
  getCurrentAccountDetails,
};
