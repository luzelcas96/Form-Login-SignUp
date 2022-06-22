import { tokenKey } from "../config";
import apiFetch from "./api-fecth";

export async function login(credentials) {
    const {token, ...user} = await apiFetch("login", {body: credentials});
    sessionStorage.setItem(tokenKey, token);
    return user;
}

export async function logout() {
    await apiFetch("logout", {method: "DELETE"});
    sessionStorage.removeItem(tokenKey);
}