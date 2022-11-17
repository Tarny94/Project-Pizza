const API__URL = "http://localhost:6060";

export const getApiUrl = (route: string) => {
  return `${API__URL}/${route}`;
};
