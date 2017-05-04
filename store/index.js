import Vuex from 'vuex'
import usuarios from './usuarios.js'
export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    usuarios
  }
})
