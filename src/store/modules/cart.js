// initial state
// shape: [{ id, quantity }]
const state = {
  productList: {}
}
// getters
const getters = {
  getProductList: state => state.productList
}

// actions
const actions = {
  clearAll: ({commit}) => {
    commit('setpPoductList', {})
  }
}

// mutations
const mutations = {
  setpPoductList (state, payload) {
    state.productList = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
