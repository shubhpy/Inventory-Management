<template>
  <div class="main-content p-0" id="inner-remaining">
  <div class="card h-fullscreen pt-5 mb-0 pl-3">
    <div class="card">
      <div class="card-body">
        <ul class="nav nav-tabs">
          <li class="nav-item col-sm-2 float-left p-0">
            <a class="nav-link active" data-toggle="tab" href="#In">Vendor In</a>
          </li>
          <li class="nav-item col-sm-2 float-left p-0">
            <a class="nav-link" data-toggle="tab" href="#Out">Collect Out</a>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane fade active show" id="In">
            <label class="col-sm-3 float-left mb-0">Add / Search Vendor :</label><br />
            <Autocomplete :suggestions="vendors" v-model="selectedVendor"></Autocomplete>
            <label for="typeahead-focus col-sm-2 float-left mb-0" > Vendor : {{selectedVendor}}</label>
            <!-- <div class="col-sm-2 float-right posrt32 pl-0">
            <input id="typeahead-focus" type="text"  v-model="model" @click="click$.next($event.target.value)" />
            
              <label class=""><br /></label>
              <a class="col-sm-12 btn btn-primary btn-outline text-dark" (click)="addVendorInfo()">+ Add</a>
                    <input  placeholder="yyyy-mm-dd" name="dp" v-model="Odate"  />
              
            </div> -->
            <div class="col-sm-3 float-right posrt32">
              <label>Select User:</label>
              <Autocomplete :suggestions="users" v-model="selectedUser"></Autocomplete>
              <label for="typeahead-focus col-sm-2 float-left mb-0" > selected user is : {{selectedUser}}</label>
            </div>
                <div class="block">
                <span class="demonstration">date</span>
                    <el-date-picker 
              v-model="entryDate"
              type="date"
              placeholder="Pick a Date"
              format="dd/MM/yyyy"
              :picker-options="pickerOptions1"
              >
              </el-date-picker>
              </div>
            <div class="col-sm-2 float-right posrt32">
              <label>Bill No:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-sm-12 card p-0 vendorItems">
              <div class="card-body pl-0 pr-3 pt-1">
                <table id="vendor-items" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr style="background:#f4f4f4;">
                      <td>&nbsp;</td>
                      <td>
                        <label>Select Item Name</label>
                        <Autocomplete :suggestions="items" v-model="selectedItem"></Autocomplete>              
                      </td>
                      <td>
                          <label>Enter Number of Boxes<span class="text-primary"> ( if applicable )</span></label>
                        <input type="text" class="form-control col-sm-6" placeholder="Boxes" v-model="noBoxes" >
                      </td>
                      <td>
                          <label>Enter Quantity in each box</label>
                        <input type="text" class="form-control col-sm-7" placeholder="Quantity" v-model="quantity">
                      </td>
                      <td>
                        <label class="d-block">Add Item(s)</label>
                        <a class="col-sm-6 btn btn-primary btn-outline text-dark" @click="addItem">+</a>
                      </td>
                    </tr>
                    <tr style="background:#fff;">
                        <td><ins>Sr no.</ins></td>
                        <td><ins>Item Name</ins></td>
                        <td><ins>Boxes</ins></td>
                        <td><ins>Quantity</ins></td>
                        <td><!--<ins>More Actions</ins>--></td>
                      </tr>
                  </tbody>
                  <tbody>
                    <tr v-for="(ai,index) in addedItems">
                        <td>{{index+1}}</td>
                        <td>{{ai.item}}</td>
                        <td>{{ai.boxes}}</td>
                        <td>{{ai.quantity}}</td>
                        <td><!-- <a class="btn btn-w-md btn-info nav-action d-inline text-white"><span class="ti-pencil"></span></a> --></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="Out">
            <div class="card pt-0 mb-0">
              <div class="card-body pl-0 pr-3 pt-1">
                <table id="category" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                  <thead>
                    <tr role="row">
                      <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Bill. No.</th>
                      <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Date</th>
                      <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Boxes</th>
                      <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Quantity</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
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
  import router from '../router'
  import Autocomplete from './Autocomplete'  
  
  export default {
  name: 'ItemEntry',
  components: {
      Autocomplete
    },
  data() {
    return {
      entryDate : null,
      model :null,
      selectedVendor : '',
      selectedUser : '',
      selectedItem : "",
      noBoxes : 0,
      quantity : 0,
      vendors: [
        {item:"Aggarwal",quantity:""},
        {item:"Horizon Computers",quantity:""},
        {item:"Cafe Coffee",quantity:""},
      ],
      items: [
          {item:"Stapler",quantity:""},
          {item:"Stapler pin",quantity:""},
          {item:"Milk",quantity:""},
          {item:"Green Tea",quantity:""}
        ],
      users: [
          {item:"Sanjeev",quantity:""},
          {item:"Kumar",quantity:""},
          {item:"Halke Ram",quantity:""},
          {item:"Ram Chand",quantity:""}
        ],
      addedItems : [
        // {item:"",boxes:"",quantity:""}
      ],
      pickerOptions1: {
          // disabledDate(time) {
          //   return time.getTime() > Date.now();
          // },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
    }
  },
  methods : {
      addItem: function(e) {
      e.preventDefault();
      console.log("Here")
      this.addedItems.push({item:this.selectedItem,boxes:this.noBoxes,quantity:this.quantity})
    }
  }
}
</script>

<style>
  @import url("//unpkg.com/element-ui@2.3.3/lib/theme-chalk/index.css");

  #inner_remaining {
      background-color: #fff;
      position: absolute;
      top: 0px;
      bottom: 0;
      width: 100%; 
  }
  .nav-tabs{
      border-bottom-color:#ebebeb;
      margin-bottom:1rem
  }.nav-tabs .nav-item.show .nav-link,
      .nav-tabs .nav-item.show .nav-link:focus,
          .nav-tabs .nav-item.show .nav-link:hover{
      color:#4d5259
  }.nav-tabs .nav-link{
      position:relative;
      border:none;
      font-size:13px;
      text-align:center;
      color:#8b95a5;
      border-bottom:2px solid transparent;
      padding:10px 16px;
      border-radius:0;
      -webkit-transition:0.5s;
      transition:0.5s
  }
  @media (max-width: 767px){
      .nav-tabs .nav-link{
          padding:8px 12px
      }
  }
  .nav-tabs .nav-link:hover,
      .nav-tabs .nav-link.active,
          .nav-tabs .nav-link.active:focus,
              .nav-tabs .nav-link.active:hover{
                  color:#4d5259;
                  border-color:#33cabb
  }
  .nav-tabs .nav-link .icon{
      margin-right:4px
  }
  .nav-tabs .nav-link .close{
      width:12px;
      height:12px;
      margin-top:6px;
      font-size:20px;
      opacity:0;
      -webkit-transform:translateX(10px);
      transform:translateX(10px)
  }
  .nav-tabs .nav-link .close span{
      display:inline-block;
      width:inherit;
      height:inherit
  }.nav-tabs .nav-link:hover .close{
      opacity:.25
  }.nav-tabs.nav-tabs-primary .nav-link:hover,
      .nav-tabs.nav-tabs-primary .nav-link.active,
          .nav-tabs.nav-tabs-primary .nav-link.active:focus,
              .nav-tabs.nav-tabs-primary .nav-link.active:hover{
                  border-color:#33cabb
  }
  .nav-tabs.nav-tabs-secondary .nav-link:hover,
      .nav-tabs.nav-tabs-secondary .nav-link.active,
          .nav-tabs.nav-tabs-secondary .nav-link.active:focus,
              .nav-tabs.nav-tabs-secondary .nav-link.active:hover{
                  border-color:#e4e7ea
  }
  .dropdown-menu.show .dropdown-item.active, .dropdown-menu.show .dropdown-item:active, .dropdown-menu.show .dropdown-item:focus, .dropdown-menu.show .dropdown-item:hover {
      background-color:#33cabb !important;
  }

  .posrt40 {
      position:relative;
      top:-40px;
  } .posrt32 {
      position:relative;
      top:-32px;
  }










  /* HeroSearch private styles */
  /* .search-result li {
      border-bottom: 1px solid gray;
      border-left: 1px solid gray;
      border-right: 1px solid gray;
      width:195px;
      height: 16px;
      padding: 5px;
      background-color: white;
      cursor: pointer;
      list-style-type: none;
    }
    
    .search-result li:hover {
      background-color: #607D8B;
    }
    
    .search-result li a {
      color: #888;
      display: block;
      text-decoration: none;
    }
    
    .search-result li a:hover {
      color: white;
    }
    .search-result li a:active {
      color: white;
    }
    #search-box {
      width: 200px;
      height: 20px;
    }
    
    
    ul.search-result {
      margin-top: 0;
      padding-left: 0;
    } */
</style>
