export function getHeaders() {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (window.localStorage.jwt) {
    headers.Authorization = `JWT ${window.localStorage.jwt}`;
  }
  return headers;
}
