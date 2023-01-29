import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "./constants";

export const matchUrlWithQueryParams = (
  endpoint: string,
  queryParams?: Record<string, any>,
): string => {
  let url: string = BASE_URL.replace(/\/$/g, "") + "/" + endpoint.replace(/^\//g, "");
  url = `${url}?${new URLSearchParams({ ...queryParams, api_key: API_KEY }).toString()}`;
  return url;
};

export const useDebounce = (value: string | number, delay: number) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};
