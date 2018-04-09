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
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'users')">Save</a><!--save(index,'users')-->
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_user(user)">Edit</a>
                      <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_user(index)">Delete</a>
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
                      <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_vendor(vendor)">Delete</a>
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
                      <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_receiver(receiver)">Delete</a>
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
                  <tr role="row" class="odd" v-for="(item,index) in items" :class="{open: item == itemOpen}">
                    <td class="sorting_1">{{index+1}}</td>
                    <td>
                      <span class="hid pl-2">{{item.name}}</span>
                      <input type="text" class="form-control col-sm-7 shw" v-model="item.name" />
                    </td>            
                    <td class="text-left pt-4">
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action shw mr-2" @click="save(index,'items')">Save</a>
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_item(item)">Edit</a>
                      <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_item(item)">Delete</a>
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
                      <a class="col-sm-5 btn btn-w-md btn-primary btn-outline nav-action hid mr-2" @click="edit_item(board)">Edit</a>
                      <a class="col-sm-5 btn btn-w-md btn-danger nav-action d-inline text-white" @click="del_item(board)">Delete</a>
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
        // users:[
        //   {name:"Sanjeev",id:""},
        //   {name:"Kumar",id:""},
        //   {name:"Halke Ram",id:""},
        //   {name:"Ram Chand",id:""}
        // ],
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
        items:[
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
      save_user() {
        this.userOpen = null
      },
      del_user: function(index) {
        this.users.splice(index, 1);
      },
      edit_vendor(vendor) {
        this.vendorOpen = vendor
      },
      save_vendor() {
        this.vendorOpen = null
      },
      del_vendor: function(index) {
        this.vendors.splice(index, 1);
      },
      edit_receiver(receiver) {
        this.receiverOpen = receiver
      },
      save_receiver() {
        this.receiverOpen = null
      },
      del_receiver: function(index) {
        this.receivers.splice(index, 1);
      },
      edit_item(item) {
        this.itemOpen = item
      },
      save_item() {
        this.itemOpen = null
      },
      del_item: function(index) {
        this.items.splice(index, 1);
      },
      save: function(index,typee) {
        //console.log(index);
        //console.log(typee);              
        var datatosend = {
          type : typee
        }
        if (typee =="users"){
          datatosend['element'] = this.users[index]
        } else if ( typee == "vendors" ) {
          datatosend['element'] = this.vendors[index]
        } else if ( typee == "receivers" ) {
          datatosend['element'] = this.receivers[index]
        } else if ( typee == "items" ) {
          datatosend['element'] = this.items[index]
        } else if ( typee == "boards" ) {
          datatosend['element'] = this.boards[index]
        }

        console.log(JSON.stringify(datatosend))
        this.$http.post( this.$hostname + 'edit' , JSON.stringify(datatosend))
        .then( function ( data ) {
          console.log(data.body);
          if (data.body.status){
            console.log("saved")
          }else{
            alert("Some else error occured")          
          }
        }.bind(this),function(data){
          console.log(data.body);
          alert("Some error occured")
        })
      }
    },
    created(){
      this.$store.dispatch('fetchNames');

      // users = this.$store.getters.getUserNames;
      // fetch(this.$hostname + 'getnames' )
      // // .then(val => {})      
      // // this.$data.fetchList(this.$hostname + 'getnames',names)
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log(json)
      //     if(json.success){
      //       this.vendors = json.users
      //       this.items = json.users
      //       this.receivers = json.users
      //       this.users = json.users
      //       // console.log(this.vendors)
      //       // console.log(this.items)
      //       // console.log(this.receivers)
      //       // console.log(this.users)
      //     }else{
      //       alert("API is working")
      //     }
      // })
      // fetchNames(){
      //   this.$store.
      // }
    },
    computed:{
      users(){
        const names = this.$store.getters.getUserNames
        if (typeof(names.length) == 'undefined') {
          return [{name:"Sanjeev",id:""},
              {name:"Kumar",id:""},
              {name:"Halke Ram",id:""},
              {name:"Ram Chand",id:""}
            ]
        }else{
          return names
        }
      }
    }
  }
</script>