// "Parameters" fetches the param types of a function. And since this is a wrapper, this is all we need
export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
