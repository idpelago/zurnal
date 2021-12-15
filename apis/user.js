import { api } from "./api";

export const getTag = async ({ username, page = null }) => {
    let userQuery = {};

    if (page !== null) userQuery.page = page;

    return await api(`GET`, `user/${username}`, {
        query: userQuery,
    });
};