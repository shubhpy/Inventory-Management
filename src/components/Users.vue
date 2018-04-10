<template>
<div class="main-content p-0" id="inner-remaining">
    <div class="card h-fullscreen pt-5 mb-0 pl-3 pr-3">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs">
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link active" data-toggle="tab" href="#Users">Users</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link" data-toggle="tab" href="#Vendors">Vendors</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link" data-toggle="tab" href="#Receivers">Receivers</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link" data-toggle="tab" href="#Items">Items</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link" data-toggle="tab" href="#Boards">Boards</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="Users">
              <table id="User" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Sr. No.</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Users name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(user,index) in users" :class="{open: user == userOpen}">
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
            <div class="tab-pane fade" id="Vendors">
              <table id="vendor" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Sr. No.</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Vendors name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(vendor,index) in vendors" :class="{open: vendor == vendorOpen}">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{vendor.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="vendor.name" />
                    </td>            
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'vendors')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_vendor(vendor)">Edit</a>
                      <!-- <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_vendor(vendor)">Delete</a> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="Receivers">
              <table id="receiver" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Sr. No.</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Receivers name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(receiver,index) in receivers" :class="{open: receiver == receiverOpen}">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{receiver.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="receiver.name" />
                    </td>            
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'receivers')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_receiver(receiver)">Edit</a>
                      <!-- <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_receiver(receiver)">Delete</a> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="Items">
              <table id="item" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Sr. No.</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">items name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(itemname,index) in itemnames" :class="{open: itemname == itemOpen}">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{itemname.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="itemname.name" />
                    </td>            
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'itemnames')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_item(itemname)">Edit</a>
                      <!-- <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_item(itemname)">Delete</a> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="Boards">
              <table id="board" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Sr. No.</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Board(s) name</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="(board,index) in boards" :class="{open: board == boardOpen}">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{board.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="board.name" />
                    </td>            
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'boards')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_board(board)">Edit</a>
                      <!-- <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_board(board)">Delete</a> -->
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
</template>
<script>
  export default {
    name : "Users",
    data () {
      return {
        userOpen:null,
        vendorOpen:null,
        receiverOpen:null,
        itemOpen:null,
        boardOpen:null,
        users:[
          {name:"Sanjeev",id:""},
          {name:"Kumar",id:""},
          {name:"Halke Ram",id:""},
          {name:"Ram Chand",id:""}
        ],
        vendors:[
          {name:"Sanjeev",id:""},
          {name:"Kumar",id:""},
          {name:"Halke Ram",id:""},
          {name:"Ram Chand",id:""}
        ],
        receivers:[
          {name:"Sanjeev",id:""},
          {name:"Kumar",id:""},
          {name:"Halke Ram",id:""},
          {name:"Ram Chand",id:""}
        ],
        itemnames:[
          {name:"Sanjeev",id:""},
          {name:"Kumar",id:""},
          {name:"Halke Ram",id:""},
          {name:"Ram Chand",id:""}
        ],
        boards:[
          {name:"Sanjeev",id:""},
          {name:"Kumar",id:""},
          {name:"Halke Ram",id:""},
          {name:"Ram Chand",id:""}
        ]
      }
    },
    methods:{
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
      },/* 
      del_user: function(index) {
        this.users.splice(index, 1);
      },
      del_vendor: function(index) {
        this.vendors.splice(index, 1);
      },
      del_receiver: function(index) {
        this.receivers.splice(index, 1);
      },
      del_item: function(index) {
        this.itemnames.splice(index, 1);
      },
      del_board: function(index) {
        this.boards.splice(index, 1);
      }, */
      delete_name: function(index,typee) {
        var datatosend = {
          type : typee
        }
        if (typee =="users"){
          datatosend['element'] = this.users[index]
        } else if ( typee == "vendors" ) {
          datatosend['element'] = this.vendors[index]
        } else if ( typee == "receivers" ) {
          datatosend['element'] = this.receivers[index]
        } else if ( typee == "itemnames" ) {
          datatosend['element'] = this.itemnames[index]
        } else if ( typee == "boards" ) {
          datatosend['element'] = this.boards[index]
        }
        this.$http.post( this.$hostname + 'edit' , JSON.stringify(datatosend))
        .then( function ( data ) {
          console.log(data);
          if (data.body.status){
            //console.log("saved")
          }else{
            //alert("Some else error occured")          
          }
        }.bind(this),function(data){
          console.log(data.body);
          alert("Some error occured")
        })
      },
      save: function(index,typee) {
        //console.log(index);
        //console.log(typee);              
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
          console.log(data.body);
          if (data.body.status){
            console.log("saved")
          }else{
            //alert("Some else error occured")          
          }
        }.bind(this),function(data){
          console.log(data.body);
          alert("Some error occured")
        })
      }
    },
    created(){
      fetch(this.$hostname + 'getnames' )
        .then(response => response.json())
        .then(json => {
          console.log(json)
          if(json.success){
            this.vendors = json.vendors
            this.itemnames = json.item_names
            this.receivers = json.users
            this.users = json.users
            this.boards = json.boards
          } else {
            alert( "API is working" )
        }
      })
    }
  }
</script>