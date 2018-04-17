import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate';

var hostname = "https://qcitech.org:8082/inventory/";

export const store = new Vuex.Store({
  state: {
    users : {},
    vendors :{},
    boards : {},
    receivers:{},
    itemsNames :{},

    itemsTable:[],
    itemsTableHeader:[],
    
    inputDetails1:[], //Input = Vendor
    inputDetails2:[],
    outputDetails1:[], // Output = Board
    outputDetails2:[]
  },
  plugins: [createPersistedState()],
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
    getReceiverNames (state) {
        return state.receivers
    },
    getItemNames (state) {
        return state.itemsNames
    },
    getItemsTableRows (state) {
        return state.itemsTableRows
    },
    getItemsTableHeader (state) {
        return state.itemsTableHeader
    },
    getVendorDetails1(state){
        return state.inputDetails1
    },
    getVendorDetails2(state){
        return state.inputDetails2
    },
    getBoardDetails1(state){
        return state.outputDetails1
    },
    getBoardDetails2(state){
        return state.outputDetails2
    }
  },
  actions: {
    fetchNames({ commit,state }) {
        fetch(hostname + 'getnames' )
        .then(response => response.json())
        .then(json => {
            // if (JSON.stringify(state.users) != JSON.stringify(json.users)){
            commit('gotNames', json);
            // }
            })
        },
    fetchItemTable({commit,state}){
        fetch( hostname + 'tabledetails' )
        .then( response => response.json() )
        .then( json => {
        if ( json.success ) {
            commit("gotItemsTable", json);
        } else {
            // this.snackMsg("API is working...",3500)
            console.log("Some Error")
        }
      })
    },
    fetchInputDetails({commit,state}){
        fetch( hostname + 'inputdetails' )
        .then( response => response.json() )
        .then( json => {
            if ( json.success ) {
                commit("gotInputDetails", json);
            } else {
                // this.snackMsg("API is working...",3500)
                console.log("Some Error")
            }
          })
    },
    fetchOutputDetails({commit,state}){
        fetch( hostname + 'outputdetails' )
        .then( response => response.json() )
        .then( json => {
            if ( json.success ) {
                commit("gotOutputDetails", json);
            } else {
                // this.snackMsg("API is working...",3500)
                console.log("Some Error")
            }
          })
    }
  },
  mutations: {
    gotNames (state,json) {
        state.vendors = json.vendors
        state.itemsNames = json.item_names
        state.receivers = json.receivers
        state.users = json.users
        state.boards = json.boards
    },
    gotItemsTable(state,json){
        state.itemsTableRows = json.details
        state.itemsTableHeader = json.headers        
    },
    gotInputDetails(state,json){
        state.inputDetails1 = json.result1
        state.inputDetails2 = json.result2
    },
    gotOutputDetails(state,json){
        state.outputDetails1 = json.result1
        state.outputDetails2 = json.result2
    }
  }
})