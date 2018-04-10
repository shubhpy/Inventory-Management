import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users : {},
    vendors :{},
    boards : {},
    collectors:{},
    items :{},
    count: 20
  },
  getters: {
    getUserNames (state) {
        return state.users
    },
    getVendorNames (state) {
        return state.vendors
    },
    getBoardNames (state) {
        return state.boards
    },
    getCollectorNames (state) {
        return state.collectors
    },
    getItemNames (state) {
        return state.items
    }
  },
  actions: {
    fetchNames({ commit,state }) {
        fetch("http://localhost:8000/" + 'getnames' )
        .then(response => response.json())
        .then(json => {
            if (JSON.stringify(state.users) != JSON.stringify(json.users)){
                commit('gotNames', json); 
            }
            })
        }
  },
  mutations: {
    gotNames (state,json) {
        state.users = json.users
        state.vendors = json.vendors
        state.boards = json.boards
        state.collectors = json.collectors
        state.items = json.items
    }
  }
})