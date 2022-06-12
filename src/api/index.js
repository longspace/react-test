import http from "../utils/http";

export const imgVerifyCode = (params = {}) => http.get("code", { params });
export const login = (data = {}) => http.post("login", data);