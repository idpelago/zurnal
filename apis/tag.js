import { api } from "./api";

export const getTag = async ({ slug, page = null }) => {
  let tagQuery = {};

  if (page !== null) tagQuery.page = page;

  return await api(`GET`, `tag/${slug}`, {
    query: tagQuery,
  });
};
