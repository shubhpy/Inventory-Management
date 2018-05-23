<template>
  <div class="main-content p-0">
    <div class="snacks" :class="{ grown: grown, sunk:sunk }">{{textToShow}}</div>
    <div class="card h-fullscreen pt-5 mb-0">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs ml-3 mr-3">
            <li class="nav-item col-sm-1 float-left p-0 mr-4">
              <a class="nav-link active" data-toggle="tab" href="#Items">Items</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0 mr-4">
              <a class="nav-link" data-toggle="tab" href="#card-title" @click="getInputDetails">Vendor History</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0 mr-4">
              <a class="nav-link" data-toggle="tab" href="#CollectHis" @click="getOutputDetails" >Collect History</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="Items">
              <div class="card-body ml-3 mr-3">
                <input type="text" v-model="searchItemkey" class="form-control col-sm-3 mt-3 ml-2" placeholder="Search Items" title="Type a name" />
                <div class="ovf col-sm-12 p-0 ovf-exc">
                  <table id="user" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr role="row">
                        <th v-for="(headr,indexh) in header" :key="headr.indexh"><p class="p-0 m-0 sm">{{headr}}</p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" class="odd" v-for="(row,index) in rows" :key="row.index">
                        <td v-for="(val,indexs) in row" :key="val.indexs">
                          <p class="p-0 m-0 sm">{{val}}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="card-title">
              <input type="text" v-model="searchVendorKey" class="form-control col-sm-3 mt-3 ml-4" placeholder="Search Vendor" title="Type a name" />
              <el-date-picker class="ml-3 mt-3"
                  v-model="searchVendorDates"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  format="dd/MM/yyyy">
                </el-date-picker>
              <br /><br />
              <div class="ovf col-sm-12 p-0">
                <div class="col-xl-6 float-left pt-3" >
                  <div class="accordion accordion-connected" id="accordion-2" v-for="(vendor,index) in vendorList1" :key="vendor.index">
                    <div class="card">
                      <h5 class="card-title">
                        <a data-toggle="collapse" data-parent="#accordion-2" :href="itemHref(index)" aria-expanded="false" class="text-dark collapsed d-block pt-3 pb-3 pl-4">
                          <ins>{{vendor.Vendor_Name}}</ins>
                          <span class="text-primary float-right pr-4">{{vendor.Date_of_Entry}}</span>
                        </a>
                      </h5>
                      <div :id="itemId(index)" class="collapse pt-3">
                        <div class="card-body">
                          <div class="col-sm-12 cs12">
                            <div class="col-sm-4 float-left p-0"><strong>Bill No.</strong> <span class="float-right">{{vendor.Bill_No}}</span></div>
                            <div class="col-sm-5 float-right p-0"><strong>User Name</strong> <span class="float-right">{{vendor.User_Name}}</span></div>
                            <div class="col-sm-4 float-left p-0"><strong>Total Items</strong> <span class="float-right">{{vendor.Total_Items}}</span></div>
                            <div class="col-sm-5 float-right p-0"><strong>Total Price</strong> <span class="float-right">&#x20B9; {{vendor.price}}</span></div>
                            <div class="col-sm-4 float-left p-0"><strong>Tax</strong> <span class="float-right">&#x20B9; {{vendor.tax}}</span></div>
                            <div class="col-sm-5 float-right p-0"><strong>Grand Total</strong> <span class="float-right">&#x20B9; {{vendor.Grand_Total}}</span></div>
                            <br /><br /><br />
                            <hr />
                            <div class="col-sm-4 p-0"><strong>Item Name</strong></div>
                            <div class="col-sm-2 p-0"><strong>Boxes</strong></div>
                            <div class="col-sm-3 p-0"><strong>Quantity</strong> </div>
                            <div class="col-sm-3 p-0"><strong>Price</strong></div>

                            <div v-for="(item,indx) in vendor.items_details" :key="item.indx">
                              <div class="col-sm-4 p-0"><span>{{item.name}}</span></div>
                              <div class="col-sm-2 p-0"><span>{{item.boxes}}</span></div>
                              <div class="col-sm-3 p-0"><span>{{item.quantity}}</span></div>
                              <div class="col-sm-3 p-0"><span>{{item.price}}</span></div>
                            </div>
                            <div class="col-sm-12">
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 float-left pt-3">
                  <div class="accordion accordion-connected" id="accordion-2" v-for="(vendor,index) in vendorList2" :key="vendor.index">
                    <div class="card">
                      <h5 class="card-title">
                        <a data-toggle="collapse" data-parent="#accordion-2" :href="itemHref2(index)" aria-expanded="false" class="text-dark collapsed d-block pt-3 pb-3 pl-4">
                          <ins>{{vendor.Vendor_Name}}</ins>
                          <span class="text-primary float-right pr-4">{{vendor.Date_of_Entry}}</span>
                        </a>
                      </h5>
                      <div :id="itemId2(index)" class="collapse pt-3">
                        <div class="card-body">
                          <div class="col-sm-12 cs12">
                            <div class="col-sm-4 float-left p-0"><strong>Bill No.</strong> <span class="float-right">{{vendor.Bill_No}}</span></div>
                            <div class="col-sm-5 float-right p-0"><strong>User Name</strong> <span class="float-right">{{vendor.User_Name}}</span></div>
                            <div class="col-sm-4 float-left p-0"><strong>Total Items</strong> <span class="float-right">{{vendor.Total_Items}}</span></div>
                            <div class="col-sm-5 float-right p-0"><strong>Total Price</strong> <span class="float-right">&#x20B9; {{vendor.price}}</span></div>
                            <div class="col-sm-4 float-left p-0"><strong>Tax</strong> <span class="float-right">&#x20B9; {{vendor.tax}}</span></div>
                            <div class="col-sm-5 float-right p-0"><strong>Grand Total</strong> <span class="float-right">&#x20B9; {{vendor.Grand_Total}}</span></div>
                            <br /><br /><br />
                            <hr />
                            <div class="col-sm-4 p-0"><strong>Item Name</strong></div>
                            <div class="col-sm-2 p-0"><strong>Boxes</strong></div>
                            <div class="col-sm-3 p-0"><strong>Quantity</strong> </div>
                            <div class="col-sm-3 p-0"><strong>Price</strong></div>

                            <div v-for="(item,indx) in vendor.items_details" :key="item.indx" >
                              <div class="col-sm-4 p-0"><span>{{item.name}}</span></div>
                              <div class="col-sm-2 p-0"><span>{{item.boxes}}</span></div>
                              <div class="col-sm-3 p-0"><span>{{item.quantity}}</span></div>
                              <div class="col-sm-3 p-0"><span>{{item.price}}</span></div>
                            </div>
                            <div class="col-sm-12">
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="CollectHis">
              <input type="text" v-model="searchBoardKey" class="form-control col-sm-3 mt-3 ml-4" placeholder="Search Board" title="Type a name..." />
              <input type="text" v-model="searchReceiverKey" class="form-control col-sm-3 mt-3 ml-4" placeholder="Search Receiver" title="Type a name..." />
              <el-date-picker class="ml-3 mt-3"
                  v-model="searchBoardDates"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  format="dd/MM/yyyy">
                </el-date-picker>
              <br /><br />
              <div class="ovf">
                <div class="col-xl-6 float-left pt-3" >
                  <div class="accordion accordion-connected" id="accordion-2" v-for="(board,index) in boardList1" :key="board.index">
                    <div class="card">
                      <h5 class="card-title">
                        <a data-toggle="collapse" data-parent="#accordion-2" :href="ritemHref1(index)" aria-expanded="false" class="text-dark collapsed d-block pt-3 pb-3 pl-4">
                          <ins>{{board.Board_Name}}</ins> ( {{board.Receiver_Name}} )
                          <span class="text-primary float-right pr-4">{{board.Date_of_receiving}}</span>
                        </a>
                      </h5>
                      <div :id="ritemId1(index)" class="collapse pt-3">
                        <div class="card-body">
                          <div class="col-sm-12 cs12"><br />
                            <div class="col-sm-6 p-0"><strong>Item Name</strong></div>
                            <div class="col-sm-6 p-0"><strong>Quantity</strong></div>
                            <div v-for="board in board.items_details">
                              <div class="col-sm-6 p-0"><span>{{board.name}}</span></div>
                              <div class="col-sm-6 p-0"><span>{{board.quantity}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 float-left pt-3" >
                  <div class="accordion accordion-connected" id="accordion-2" v-for="(board,index) in boardList2" :key="board.index">
                    <div class="card">
                      <h5 class="card-title">
                        <a data-toggle="collapse" data-parent="#accordion-2" :href="ritemHref2(index)" aria-expanded="false" class="text-dark collapsed d-block pt-3 pb-3 pl-4">
                          <ins>{{board.Board_Name}}</ins> ( {{board.Receiver_Name}} )
                          <span class="text-primary float-right pr-4">{{board.Date_of_receiving}}</span>
                        </a>
                      </h5>
                      <div :id="ritemId2(index)" class="collapse pt-3">
                        <div class="card-body">
                          <div class="col-sm-12 cs12"><br />
                            <div class="col-sm-6 p-0"><strong>Item Name</strong></div>
                            <div class="col-sm-6 p-0"><strong>Quantity</strong></div>
                            <div v-for="board in board.items_details">
                              <div class="col-sm-6 p-0"><span>{{board.name}}</span></div>
                              <div class="col-sm-6 p-0"><span>{{board.quantity}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  import router from '../router'

  export default {
    beforeRouteEnter(to, from, next) {
      // // router.go({path: router.path})
      // console.log(router.currentRoute)
      store.dispatch('fetchItemTable').then(response => {})
      store.dispatch('fetchInputDetails').then(response => {})
      store.dispatch('fetchOutputDetails').then(response => {
            next()
        })      
    },
    name: 'Users',
    data () {
      return {
        textToShow:'',
        grown:false,
        sunk:false,
        searchBoardKey:null,
        searchVendorKey:null,
        searchReceiverKey:null,
        searchItemkey:null,
        tablOpen:null,
        searchBoardDates:null,
        searchVendorDates : null,
        // list:[] // can you make partial loads
        // rows_:[],
        // header_:[],
        // vendorList1_:[],
        // vendorList2_:[],
        // boardList1_:[],
        // boardList2_:[]
      }
    },
 
    methods : {
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
      itemHref: function (index) {
        return "#item" + index.toString();
        },
      itemId: function (index) {
        return "item" + index.toString();
      },
      itemHref2: function (index) {
        return "#items" + index.toString();
        },
      itemId2: function (index) {
        return "items" + index.toString();
      },
      ritemHref1: function (index) {
        return "#ritem" + index.toString();
        },
      ritemId1: function (index) {
        return "ritem" + index.toString();
      },
      ritemHref2: function (index) {
        return "#ritems" + index.toString();
        },
      ritemId2: function (index) {
        return "ritems" + index.toString();
      },
      getInputDetails: function() {
          // this.$store.dispatch('fetchInputDetails')
      },
      getOutputDetails: function(){
          // this.$store.dispatch('fetchOutputDetails')
      }
    },
    computed:{
      rows (){
        if (this.$store.getters.getItemsTableRows){
          if (this.$store.getters.getItemsTableRows.length){
            if (this.searchItemkey){
                return this.$store.getters.getItemsTableRows.filter(row => {
                  return row[1].toLowerCase().includes(this.searchItemkey.toLowerCase())
                })
              }else{
                return this.$store.getters.getItemsTableRows
              }
          }else{
            return []
          }
        }
      },
      header (){
        if (this.$store.getters.getItemsTableHeader.length){
          return this.$store.getters.getItemsTableHeader
        } else {
          return []
        }
      },
      vendorList1 (){
        if (this.$store.getters.getVendorDetails1.length){
          return this.$store.getters.getVendorDetails1.filter(row => {
            if (this.searchVendorKey){
              var VK = row.Vendor_Name.toLowerCase().includes(this.searchVendorKey.toLowerCase())
            } else {
              var VK = true
            }

            if (this.searchVendorDates){
              var DK = (row.epoch_of_date*1000 >= this.searchVendorDates[0] &&  row.epoch_of_date*1000 <= this.searchVendorDates[1] ) 
            } else {
              var DK = true
            }
              return ( VK && DK )
            })
        }
        else{
          return []
        }
      },
      vendorList2 (){
        if (this.$store.getters.getVendorDetails2.length){
          return this.$store.getters.getVendorDetails2.filter(row => {
              if ( this.searchVendorKey ) {
                var VK = row.Vendor_Name.toLowerCase().includes(this.searchVendorKey.toLowerCase())
              } else {
                var VK = true
              } 
              if ( this.searchVendorDates ) {
                var DK = ( row.epoch_of_date*1000 >= this.searchVendorDates[0] &&  row.epoch_of_date*1000 <= this.searchVendorDates[1] )
              } else {
                var DK = true
              }
                return (VK && DK)
              })
        }else{
          return []
        }
      },
      boardList1 (){
        if (this.$store.getters.getBoardDetails1.length){
            return this.$store.getters.getBoardDetails1.filter(row => {
              if ( this.searchReceiverKey ) {
                var RK = row.Receiver_Name.toLowerCase().includes( this.searchReceiverKey.toLowerCase() )
              } else {
                var RK = true
              }
              if ( this.searchBoardKey ) {
                var BK = row.Board_Name.toLowerCase().includes( this.searchBoardKey.toLowerCase() )
              } else {
                var BK = true
              }
              if ( this.searchBoardDates ) {
                var DK = ( row.epoch_of_date*1000 >= this.searchBoardDates[0] &&  row.epoch_of_date*1000 <= this.searchBoardDates[1] ) 
              } else {
                var DK = true
              }
              return ( RK && BK && DK )
            })
        }else{
          return []
        }
      },
      boardList2 (){
        if (this.$store.getters.getBoardDetails1.length){   
            return this.$store.getters.getBoardDetails2.filter(row => {
              if ( this.searchReceiverKey ){
                var RK = row.Receiver_Name.toLowerCase().includes( this.searchReceiverKey.toLowerCase() )
              } else {
                var RK = true
              }

              if (this.searchBoardKey){
                var BK = row.Board_Name.toLowerCase().includes( this.searchBoardKey.toLowerCase() )
              } else {
                var BK = true
              }
              if ( this.searchBoardDates ){
                var DK = ( row.epoch_of_date*1000 >= this.searchBoardDates[0] &&  row.epoch_of_date*1000 <= this.searchBoardDates[1] ) 
              } else {
                var DK = true
              }
              return ( RK && BK && DK )
            })
        }else{
          return []
        }
      }
    }
  }


</script>
<style>
  @import url("//unpkg.com/element-ui@2.3.3/lib/theme-chalk/index.css");
  .accordion {
    display: inline-block;
    width:100%;
  } .accordion .card {
    height:auto;
    background-color:#fff;
    margin-bottom:10px;
    display:inline-block;
    width:100%;
    box-shadow:5px 5px 5px -5px #eee;
    border:1px solid #eee;
  } .accordion .card-title {
    background-color:#fcfcfc;
    margin:0
  } .card-body .cs12 {
    box-shadow:5px 5px 10px 0px #efefef;
    padding-bottom:10px;
  } .ovf {
    height:64vh;
    overflow:hidden;
    overflow-y:auto;
  }
  .ovf-exc {
    overflow:auto;
  }
  table.dataTable thead th p.sm, table.dataTable tbody tr td p.sm{
    max-height:18px;
    -webkit-line-clamp: 1;
    max-width:180px;
    min-width:90px    
}
</style>