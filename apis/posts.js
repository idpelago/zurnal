import { api } from "./api";

export const getPosts = async ({ page }) => {
  return await api(`GET`, "posts", { query: { page } });
};
