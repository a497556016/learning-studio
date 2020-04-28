import store from "../../store";
import Vue from "vue";
import router from "../../router";

const excludes = [];

export default http => {
  // 添加一个请求拦截器
  http.interceptors.request.use(
    function(config) {
      // alert(config.baseURL+config.url)

      //过滤不需要拦截的请求
      if (
        excludes.includes(config.url) ||
        config.url.endsWith("/config.json")
      ) {
        return config;
      }

      const loginUser = store.state.app.loginUser;
      if (loginUser && loginUser.tokenInfo) {
        config.headers["Authorization"] =
          "Bearer " + loginUser.tokenInfo.access_token;
      }

      return config;
    },
    function(error) {
      http.closeLoading();

      // Do something with request error
      return Promise.reject(error);
    }
  );

  // 添加一个响应拦截器
  http.interceptors.response.use(
    function(response) {
      http.closeLoading();

      // Do something with response data
      console.log("http after", response);

      return response.data;
    },
    function(error) {
      console.log("请求异常：", error.toJSON());
      http.closeLoading();

      if (
        error.response &&
        error.response.data &&
        error.response.data.error_description
      ) {
          if(error.response.data.error === "invalid_token") {
              Vue.prototype.$notify({
                  message: "登录已失效，请重新登录！",
                  color: "error"
              });
              router.push({path: '/oauth'});
              return;
          }
        const msg = error.response.data.error_description;
        Vue.prototype.$notify({
            message: msg
        });
        return Promise.reject(msg);
      } else if (error.message) {
          Vue.prototype.$notify({
              message: error.message
          });
        return Promise.reject(error.message);
      }

      // alert(msg);

      return Promise.reject(error);
    }
  );
};
