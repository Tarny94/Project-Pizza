const port = 6060;

export const getApiUrl = (route: string) => {
  return `localhost:${port}/${route}`;
};
