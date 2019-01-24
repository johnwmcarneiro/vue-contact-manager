import uuidv1 from 'uuid/v1';

const state = {
  rows: [],
  contact: null
}

const mutations = {
  selectContact (state, payload) {
    state.contact = payload
  },

  create (state, payload) {
    state.rows.push(payload)
  },

  update (state, payload) {
    state.rows.map((row, index) => {
      if (state.id === row.id) {
        state.rows[index] = payload
      }
    })
  },

  deleteContact (state, payload) {
    state.rows = state.rows.filter(row => row.id !== payload.id)
  }
}

const actions = {
  selectContact ({ commit }, payload) {
    commit('selectContact', payload)
  },

  saveContact({ commit, dispatch }, payload) {
    if (payload.id !== null) {
      commit('update', payload)
    } else {
      payload = {...payload, id: uuidv1()}
      commit('create', payload)
    }

    dispatch('selectContact', payload)
  },

  deleteContact ({ commit }, payload) {
    commit('deleteContact', payload)
    commit('selectContact', null)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
