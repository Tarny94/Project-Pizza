const port = 6060;

console.log(window.location.protocol);
console.log(window.location.hostname);

export const getApiUrl = (route: string) => {
  return `${window.location.protocol}//${window.location.hostname}:${port}/${route}`;
};
