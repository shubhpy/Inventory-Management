<template>
<div class="main-content p-0" id="inner-remaining">
  <div class="snacks" :class="{ grown: grown, sunk:sunk }">{{textToShow}}</div>
  <div class="card h-fullscreen pt-5 mb-0 pl-3 pr-3">
    <div class="card">
      <div class="card-body">
        <ul class="nav nav-tabs">
          <li class="nav-item col-sm-1 float-left p-0 mr-4">
            <a class="nav-link active" data-toggle="tab" href="#Items">Items</a>
          </li>
          <li class="nav-item col-sm-1 float-left p-0 mr-4">
            <a class="nav-link" data-toggle="tab" href="#Vendors">Vendors</a>
          </li>
          <li class="nav-item col-sm-1 float-left p-0 mr-4">
            <a class="nav-link" data-toggle="tab" href="#Receivers">Receivers</a>
          </li>
          <li class="nav-item col-sm-1 float-left p-0 mr-4">
            <a class="nav-link" data-toggle="tab" href="#Users">Users</a>
          </li>
          <li class="nav-item col-sm-1 float-left p-0">
            <a class="nav-link" data-toggle="tab" href="#Boards">Boards</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade" id="Users">
            <input type="text" v-model="searchUserkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Users" title="Type a name" />
            <div class="ovf col-sm-12 p-0 mt-4">
              <table id="User" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th><p class="p-0 m-0 sm">Users name</p></th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(user,index) in users" :class="{open: user == userOpen}" :key="user.index">
                    <td class="col-sm-1">{{index+1}}</td>
                    <td class="col-sm-9">
                      <p class="p-0 m-0 sm">
                        <span class="hid pl-2">{{user.name}}</span>
                        <input type="text" class="form-control col-sm-7 shw" v-model="user.name" />
                      </p>
                    </td>            
                    <td class="col-sm-2 text-left">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2 bg-white" @click="save(index,'users')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2 bg-white" @click="edit_user(user)">Edit</a>
                      <!-- <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="delete_name(index,'users')">Delete</a> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="Vendors">
            <input type="text" v-model="searchVendorkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Vendors" title="Type a name" />
            <div class="ovf col-sm-12 p-0 mt-4">
              <table id="vendor" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th><p class="p-0 m-0 sm">Vendors name</p></th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(vendor,index) in vendors" :class="{open: vendor == vendorOpen}" :key="vendor.index">
                    <td class="">{{index+1}}</td>
                    <td>
                      <p class="p-0 m-0 sm">
                        <span class="hid pl-2">{{vendor.name}}</span>
                        <input type="text" class="form-control col-sm-7 shw" v-model="vendor.name" />
                      </p>
                    </td>
                    <td class="text-left">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2 bg-white" @click="save(index,'vendors')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2 bg-white" @click="edit_vendor(vendor)">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="Receivers">
            <input type="text" v-model="searchReceiverkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Receivers" title="Type a name" />
            <div class="ovf col-sm-12 p-0 mt-4">
              <table id="receiver" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th><p class="p-0 m-0 sm">Receivers name</p></th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(receiver,index) in receivers" :class="{open: receiver == receiverOpen}" :key="receiver.index">
                    <td class="">{{index+1}}</td>
                    <td>
                      <p class="p-0 m-0 sm">
                        <span class="hid pl-2">{{receiver.name}}</span>
                        <input type="text" class="form-control col-sm-7 shw" v-model="receiver.name" />
                      </p>
                    </td>            
                    <td class="text-left">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2 bg-white" @click="save(index,'receivers')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2 bg-white" @click="edit_receiver(receiver)">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade active show" id="Items">
            <input type="text" v-model="searchItemkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Items" title="Type a name" />
            <div class="ovf col-sm-12 p-0 mt-4">
              <table id="item" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th><p class="p-0 m-0 sm">Items name</p></th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(itemname,index) in itemnames" :class="{open: itemname == itemOpen}" :key="itemname.index">
                    <td class="">{{index+1}}</td>
                    <td>
                      <p class="p-0 m-0 sm">
                        <span class="hid pl-2">{{itemname.name}}</span>
                        <input type="text" class="form-control col-sm-7 shw" v-model="itemname.name" />
                      </p>
                    </td>
                    <td class="text-left">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2 bg-white" @click="save(index,'itemnames')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2 bg-white" @click="edit_item(itemname)">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="Boards">
            <input type="text" v-model="searchBoardkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Boards" title="Type a name" />
            <div class="ovf col-sm-12 p-0 mt-4">
              <table id="board" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th><p class="p-0 m-0 sm">Board(s) name</p></th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(board,index) in boards" :class="{open: board == boardOpen}" :key="board.index">
                    <td class="">{{index+1}}</td>
                    <td>
                      <p class="p-0 m-0 sm">
                        <span class="hid pl-2">{{board.name}}</span>
                        <input type="text" class="form-control col-sm-7 shw" v-model="board.name" />
                      </p>
                    </td>
                    <td class="text-left">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2 bg-white" @click="save(index,'boards')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2 bg-white" @click="edit_board(board)">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import { store } from '../Store/store'
  export default {
    beforeRouteEnter(to, from, next) {
      store.dispatch('fetchNames').then(response => {
            next()
        })
    },
    name : "Users",
    data () {
      return {
        textToShow:'',
        grown:false,
        sunk:false,
        userOpen:null,
        vendorOpen:null,
        receiverOpen:null,
        itemOpen:null,
        searchUserkey:null,
        searchVendorkey:null,
        searchReceiverkey:null,
        searchItemkey:null,
        searchBoardkey:null,
        boardOpen:null,
        // users_:[],
        // vendors_:[],
        // receivers_:[],
        // itemnames_:[],
        // boards_:[]
      }
    },
    methods:{
      snackMsg(msg,timeout){
        this.sunk = false
        this.grown = true
        this.textToShow = msg
        setTimeout(() => {
          this.grown = false
          this.sunk = true
          this.textToShow = ""
        }, timeout );
      },
      edit_user(user) {
        this.userOpen = user
      },
      edit_vendor(vendor) {
        this.vendorOpen = vendor
      },
      edit_receiver(receiver) {
        this.receiverOpen = receiver
      },
      edit_item(itemname) {
        this.itemOpen = itemname
      },
      edit_board(board) {
        this.boardOpen = board
      },
      save: function(index,typee) {        
        var datatosend = {
          type : typee
        }
        if (typee =="users"){
          this.userOpen = null
          datatosend['element'] = this.users[index]
        } else if ( typee == "vendors" ) {
          this.vendorOpen = null
          datatosend['element'] = this.vendors[index]
        } else if ( typee == "receivers" ) {
          this.receiverOpen = null
          datatosend['element'] = this.receivers[index]
        } else if ( typee == "itemnames" ) {
          this.itemOpen = null
          datatosend['element'] = this.itemnames[index]
        } else if ( typee == "boards" ) {
          this.boardOpen = null
          datatosend['element'] = this.boards[index]
        }
        var token = localStorage.getItem('token')
        this.$http.post( this.$hostname + 'edit' , JSON.stringify(datatosend),{headers: {Authorization: token}})
        .then( function ( data ) {
          if (data.body.success){
            this.snackMsg("Data saved...",3500)
            //console.log("saved")
          }else{
            this.snackMsg("Please try again...",3500)
            //alert("Some else error occured")          
          }
        })
      }
    },
    computed:{
      users (){
        if (this.$store.getters.getUserNames.length){
          if (this.searchUserkey){
            return this.$store.getters.getUserNames.filter(user => {
              return user.name.toLowerCase().includes(this.searchUserkey.toLowerCase())
            })
          }else{
            return this.$store.getters.getUserNames
          }
        }else{
          return {}
        }
      },
      vendors (){
        if (this.$store.getters.getVendorNames.length){
          if (this.searchVendorkey){
            return this.$store.getters.getVendorNames.filter(vendor => {
              return vendor.name.toLowerCase().includes(this.searchVendorkey.toLowerCase())
            })
          }else{
            return this.$store.getters.getVendorNames
          }
        }else{
          return {}
        }
      },
      receivers (){
        if (this.$store.getters.getReceiverNames.length){        
          if (this.searchReceiverkey){
            return this.$store.getters.getReceiverNames.filter(receiver => {
              return receiver.name.toLowerCase().includes(this.searchReceiverkey.toLowerCase())
            })
          }else{
            return this.$store.getters.getReceiverNames
          }
        }else{
          return {}
        }
      },
      itemnames (){
        if (this.$store.getters.getItemNames.length){
          if (this.searchItemkey){
            return this.$store.getters.getItemNames.filter(itemname => {
              return itemname.name.toLowerCase().includes(this.searchItemkey.toLowerCase())
            })
          }else{
            return this.$store.getters.getItemNames
          }
        }else{
          return {}
        }
      },
      boards (){
        if (this.$store.getters.getBoardNames.length){
          if (this.searchBoardkey){
            return this.$store.getters.getBoardNames.filter(board => {
              return board.name.toLowerCase().includes(this.searchBoardkey.toLowerCase())
            })
          }else{
            return this.$store.getters.getBoardNames
          }
        }else{
          return {}
        }
      }
    }
  }
</script>
<style>
table.dataTable tbody th, table.dataTable tbody td { padding:6px 10px; }
table.dataTable thead th p.sm, table.dataTable tbody tr td p.sm{
    max-height:18px;
    -webkit-line-clamp: 1;
    max-width:450px;
    min-width:350px    
}
</style>
