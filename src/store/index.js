import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    LoggedIn: false,
    token: "",
    userid: null,
    usertype: ""
  },
  modules: {
  }
})

export default store
