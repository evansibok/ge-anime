export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const setOptions = (method, body) => ({
  method,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body,
});
