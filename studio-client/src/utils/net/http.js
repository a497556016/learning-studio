import axios from "axios";
import { BASE_URL } from "../../config";

import interceptor from "./interceptor";

interceptor(axios);

// axios默认配置
axios.defaults.timeout = 10000; // 超时时间
axios.defaults.baseURL = BASE_URL; // 默认地址

axios.withLoading = function() {
  this.$loading = null;
  return this;
};

axios.closeLoading = function() {
  if (this.$loading) {
    this.$loading.hide();
  }
};

export default axios;
