const API_URL = process.env.REACT_APP_API_URL || "http://localhost:6060";

export const getApiUrl = (route: string) => {
  return `${API_URL}/${route}`;
};
