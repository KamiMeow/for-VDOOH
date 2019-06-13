import net from '../../plugins/network';

export default {
  state: {
    adventures: [],
  },
  mutations: {
    INIT_ADVENTURES: (state, adventures) => state.adventures = adventures,
    ADD_ADVENTURE: (state, adventure) => state.adventures.push(adventure),
  },
  actions: {
    initAdventures: ({ commit }, adventures) => (commit('INIT_ADVENTURES', adventures)),
    addAdventure: async ({ commit }, adventure) => {
      const newAdventure = await net.post('http://localhost:3000/adventures', adventure);
      commit('ADD_ADVENTURE', newAdventure);
    },
  },
  getters: {
    getAdventures: state => state.adventures.sort((prev, next) => prev.date < next.date ? 1 : -1),
  },
};
