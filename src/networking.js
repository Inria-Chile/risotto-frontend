const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const get = (path) =>
  fetch(`${BACKEND_URL}${path}`).then((response) => response.json());
