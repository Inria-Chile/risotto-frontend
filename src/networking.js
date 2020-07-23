const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const get = (path, params) => {
  let query = "";
  if (params) {
    query = Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
    query = `?${query}`;
  }
  return fetch(`${BACKEND_URL}${path}${query}`).then((response) =>
    response.json()
  );
};
