import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

import contacts from './contacts';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'VueContactManager'
  })],
  modules: {
    contacts
  }
});
