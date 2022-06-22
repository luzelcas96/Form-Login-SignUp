import { tokenKey } from "../config";
import apiFetch from "./api-fecth";

export async function createUser(newUser){
    const {token, ...user} = await apiFetch("signup", {body:newUser});
    sessionStorage.setItem(tokenKey, token);
    return user;
}

export async function getUser() {
    const {token, ...user} = await apiFetch("profile");
    return user;
}