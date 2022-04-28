const localAppName = "sketch-app-";

export const setLocalStorage = (name: string, value: string) =>
  localStorage.setItem(localAppName + name, JSON.stringify(value));

export const getLocalStorage = (name: string) =>
  JSON.parse(localStorage.getItem(localAppName + name) || "null");

export const removeLocalStorage = (name: string) =>
  localStorage.removeItem(localAppName + name);
