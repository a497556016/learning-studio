import account from "../../api/account";
import storage from "../../utils/storage";
const LOGIN_USER_KEY = "LOGIN_USER_KEY";
export default {
    namespaced: true,
    state: {
        loginUser: null
    },
    getters: {
        getLoginUser(state) {
            if(!state.loginUser) {
                state.loginUser = storage.getObject(LOGIN_USER_KEY);
            }
            return state.loginUser;
        }
    },
    mutations: {
        setLoginUser(state, loginUser) {
            state.loginUser = loginUser;
            storage.put(LOGIN_USER_KEY, state.loginUser);
        }
    },
    actions: {
        async login({commit}, userInfo){
            const tokenInfo = await account.oauth2Login(userInfo.username, userInfo.password);
            commit('setLoginUser', {
                userInfo,
                tokenInfo
            });
        }
    }
}