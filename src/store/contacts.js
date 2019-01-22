const state = {
  rows: [
    {
      id: 'a1b2c1',
      name: 'Customer 01',
      email: 'customer01@example.com',
      phone: '(99) 99999-9999',
      company: 'Company A',
      role: 'Programmer'
    },
    {
      id: 'a1b2c2',
      name: 'Customer 02',
      email: 'customer02@example.com',
      phone: '(99) 99999-9999',
      company: 'Company B',
      role: "Engineer"
    },
    {
      id: 'a1b2c3',
      name: 'Customer 03',
      email: 'customer03@example.com',
      phone: '(99) 99999-9999',
      company: 'Company C',
      role: "Restaurant owner"
    },
  ],
  contact: null
};

const mutations = {
  increment (state, payload) {
    state.rows.push(payload);
  },

  selectContact (state, payload) {
    state.contact = payload;
  },

  // updateContact (state, payload) {
  // }

  deleteContact (state, payload) {
    state.rows = state.rows.filter(row => row.id != payload.id);
  }
};

const actions = {
  selectContact ({ commit }, payload) {
    commit('selectContact', payload);
  },

  deleteContact ({ commit }, payload) {
    commit('deleteContact', payload);
    commit('selectContact', null);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};