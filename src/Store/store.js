import Vue from 'vue'
import Vuex from 'vuex';
import router from '../router'

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate';
/* import InfiniteLoading from 'vue-infinite-loading'; */

// var hostname = "https://qcitech.org:8082/inventory/";
   var hostname = 'Inventory-ELB-BACKEND-780554935.ap-south-1.elb.amazonaws.com';

// var hostname = "http://192.168.15.153:5000/inventory/";

// var token = localStorage.getItem('token');
// var headers =  new Headers();
// headers.append('Authorization',token);

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
        return new Promise((resolve, reject) => {
            var token = localStorage.getItem('token');
            var headers =  new Headers();
            headers.append('Authorization',token);

            fetch(hostname + 'getnames' , {headers:headers})
            .then(response => response.json())
            .then(json => {
                if ( json.success ) {
                    commit('gotNames', json)
                    resolve("response")
                }else{
                    console.log("Some Error")
                }
            })
        })
    },
    fetchItemTable({commit,state}){
        return new Promise((resolve, reject) => {
            var token = localStorage.getItem('token');
            var headers =  new Headers();
            headers.append('Authorization',token);

            fetch(hostname + 'tabledetails', { headers:headers })
            .then(response => response.json())
            .then(json => {
            if ( json.success ) {
                commit("gotItemsTable", json);
                console.log("resolved")
                resolve("response");
            } else {
                console.log("Some Error")
            }
          })
        })
    },/* 
    InfiniteHandler: function ($state){
        let limit = state.itemsTableRows + 40
        return new Promise((resolve, reject) => {
            var token = localStorage.getItem('token');
            var headers =  new Headers();
            headers.append('Authorization',token);

            fetch(hostname + 'tabledetails?limit=14', { headers:headers })
            .then(response => this.loadMore())
            .then(json => {
                if ( json.success ) {
                    commit("gotItemsTable", json);
                    console.log("resolved")
                    resolve("response");
                } else {
                    console.log("Some Error")
                }
            })
        })
    },
    loadMore:function(){

    }, */
    fetchInputDetails({commit,state}){
        return new Promise((resolve, reject) => {
            var token = localStorage.getItem('token');
            var headers =  new Headers();
            headers.append('Authorization',token);

            fetch( hostname + 'inputdetails', {headers:headers})
            .then( response => response.json() )
            .then( json => {
                if ( json.success ) {
                    commit("gotInputDetails", json);
                    resolve("response");
                }else{
                    console.log("Some Error")
                }
            })
        })
    },
    fetchOutputDetails({commit,state}){
        return new Promise((resolve, reject) => {
            var token = localStorage.getItem('token');
            var headers =  new Headers();
            headers.append('Authorization',token);

            fetch( hostname + 'outputdetails' ,{headers:headers} )
            .then( response => response.json() )
            .then( json => {
                if ( json.success ) {
                    commit("gotOutputDetails", json);
                    resolve("response");
                }else{
                    console.log("Some Error")
                }
            })
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
        console.log("getting")        
        state.itemsTableRows = json.details
        state.itemsTableHeader = json.headers
        console.log("got")
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