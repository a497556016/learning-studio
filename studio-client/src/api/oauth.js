import http from "../utils/net/http";
import config from "../config";

export const base_path = "http://localhost:8081";
export const security = {

    client: {
        client_id: "LearnStudio",
        access_token_uri: config.BASE_URL + "oauth/token",
        user_authorization_uri: base_path + "/oauth/authorize",
        registered_redirect_uri: window.location.origin + process.env.BASE_URL + "oauth"
    },
    authorization: {
        check_token_access: base_path + "/oauth/check_token"
    },
    resource: {
        token_info_uri: base_path + "/oauth/check_token",
        user_info_uri: base_path + "/user",
        logout_uri: base_path + "/logout",
    },
};

export default {

    // token(params){
    //     return http.post(security.client.access_token_uri, null, {
    //         params: {
    //             grant_type: 'authorization_code',
    //             code: params.code,
    //             client_id: security.client.client_id,
    //             client_secret: security.client.client_secret,
    //             redirect_uri: security.client.registered_redirect_uri
    //         }
    //     })
    // },

    token(params) {
        return http.post(security.client.access_token_uri, null, {
            params: {
                code: params.code,
                redirectUri: security.client.registered_redirect_uri
            }
        })
    },

    user(token){
        return http.get(security.resource.user_info_uri, {
            params: {
                token: token
            }
        })
    }
}