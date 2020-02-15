import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from "./modules/app";
import document from "./modules/document";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    document
  }
})
