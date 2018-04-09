import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    names : {},
    users : {},
    lists: {},
    activeType: null,
    count: 20
  },
  getters: {
    getUserNames (state) {
        return state.users
        },
    activeItems (state) {
        const {activeType, lists, count} = state
        var data = lists[activeType]
        return (activeType && data && data.length) ? data.slice(0, count) : []
        }
  },
  actions: {
    fetchNames({ commit,state }) {
        fetch("http://localhost:8000/" + 'getnames' )
        .then(response => response.json())
        .then(json => {
            if (JSON.stringify(state.users)!=JSON.stringify(json.users)){
                commit('gotNames', json);            
            }
            })
        }
  },
  mutations: {
    gotNames (state,json) {
        state.users = json.users
    }
  }
})