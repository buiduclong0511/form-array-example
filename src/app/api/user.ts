import { environment } from "./environment";

export const user = {
    getUserUrl: environment.baseUrl + "users",
    getInfoUrl: environment.baseUrlF8 + "api/auth/me"
}