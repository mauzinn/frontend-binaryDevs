import { createStore } from 'vuex'

export default createStore({
  state: {
    service: -1,
    services: [{
        id: 0,
        price: "R$ 279,99",
        title: 'Criação de site'
    },
    {
        id: 1,
        price: "R$ 99,99",
        title: 'Manutenção de Site'
    },
    {
        id: 2,
        price: "Consulte",
        title: 'Outro Serviço'
    }]
  },
  getters: {
  },
  mutations: {
    SET_SERVICE(state, service) {
      state.service = service
    }
  },
  actions: {
  },
  modules: {
  }
})
