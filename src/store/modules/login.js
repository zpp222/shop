// initial state
// shape: [{ id, quantity }]
const state = {
  loginCode: '',
  token: ''
}
// getters
const getters = {
  loginCode: state => state.loginCode,
  token: state => state.token
}

// actions
const actions = {
  clearAll: ({commit}) => {
    commit('setloginCode', {})
    commit('setToken', {})
  }
}

// mutations
const mutations = {
  setloginCode (state, payload) {
    state.loginCode = payload
  },
  setToken (state, payload) {
    state.token = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
