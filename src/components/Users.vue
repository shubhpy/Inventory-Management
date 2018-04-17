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
            <div class="ovf col-sm-12 p-0">
              <table id="User" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th>Users name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(user,index) in users" :class="{open: user == userOpen}" :key="user.index">
                    <td class="col-sm-1 sorting_1">{{index+1}}</td>
                    <td class="col-sm-9">
                      <span class="hid pl-2">{{user.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="user.name" />
                    </td>            
                    <td class="col-sm-2 text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'users')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_user(user)">Edit</a>
                      <!-- <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="delete_name(index,'users')">Delete</a> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="Vendors">
            <input type="text" v-model="searchVendorkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Vendors" title="Type a name" />
            <div class="ovf col-sm-12 p-0">
              <table id="vendor" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th>Vendors name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(vendor,index) in vendors" :class="{open: vendor == vendorOpen}" :key="vendor.index">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{vendor.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="vendor.name" />
                    </td>
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'vendors')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_vendor(vendor)">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="Receivers">
            <input type="text" v-model="searchReceiverkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Receivers" title="Type a name" />
            <div class="ovf col-sm-12 p-0">
              <table id="receiver" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th>Receivers name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(receiver,index) in receivers" :class="{open: receiver == receiverOpen}" :key="receiver.index">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{receiver.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="receiver.name" />
                    </td>            
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'receivers')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_receiver(receiver)">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade active show" id="Items">
            <input type="text" v-model="searchItemkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Items" title="Type a name" />
            <div class="ovf col-sm-12 p-0">
              <table id="item" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th>Items name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(itemname,index) in itemnames" :class="{open: itemname == itemOpen}" :key="itemname.index">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{itemname.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="itemname.name" />
                    </td>
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'itemnames')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_item(itemname)">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="Boards">
            <input type="text" v-model="searchBoardkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Boards" title="Type a name" />
            <div class="ovf col-sm-12 p-0">
              <table id="board" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1">Sr. No.</th>
                    <th>Board(s) name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(board,index) in boards" :class="{open: board == boardOpen}" :key="board.index">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{board.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="board.name" />
                    </td>
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'boards')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_board(board)">Edit</a>
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
  export default {
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
        users_:[],
        vendors_:[],
        receivers_:[],
        itemnames_:[],
        boards_:[]
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
        this.$http.post( this.$hostname + 'edit' , JSON.stringify(datatosend))
        .then( function ( data ) {
          if (data.body.status){
            this.snackMsg("Deta saved...",3500)
            //console.log("saved")
          }else{
            this.snackMsg("Please try again...",3500)
            //alert("Some else error occured")          
          }
        }.bind(this),function(data){
            this.snackMsg("Please try again...",3500)
          //alert("Some error occured")
        })
      }
    },
    computed:{
      users (){
        if (this.searchUserkey){
          return this.users_.filter(user => {
            return user.name.toLowerCase().includes(this.searchUserkey.toLowerCase())
          })
        }else{
          return this.users_
        }
      },
      vendors (){
        if (this.searchVendorkey){
          return this.vendors_.filter(vendor => {
            return vendor.name.toLowerCase().includes(this.searchVendorkey.toLowerCase())
          })
        }else{
          return this.vendors_
        }
      },
      receivers (){
        if (this.searchReceiverkey){
          return this.receivers_.filter(receiver => {
            return receiver.name.toLowerCase().includes(this.searchReceiverkey.toLowerCase())
          })
        }else{
          return this.receivers_
        }
      },
      itemnames (){
        if (this.searchItemkey){
          return this.itemnames_.filter(itemname => {
            return itemname.name.toLowerCase().includes(this.searchItemkey.toLowerCase())
          })
        }else{
          return this.itemnames_
        }
      },
      boards (){
        if (this.searchBoardkey){
          return this.boards_.filter(board => {
            return board.name.toLowerCase().includes(this.searchBoardkey.toLowerCase())
          })
        }else{
          return this.boards_
        }
      }
    },
    created(){
      fetch(this.$hostname + 'getnames' )
        .then(response => response.json())
        .then(json => {
          if ( json.success ) {
            this.vendors_ = json.vendors
            this.itemnames_ = json.item_names
            this.receivers_ = json.receivers
            this.users_ = json.users
            this.boards_ = json.boards
          } else {
            this.snackMsg("API is working...",3500)
            //alert("API is working")
        }
      })
    }
  }
</script>