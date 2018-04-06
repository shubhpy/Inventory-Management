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
              <br />
              <div class="col-sm-4 brdr">
                <label class="col-sm-12 float-left mb-0 pl-0">Add / Search Vendor :</label><br />
                <Autocomplete class="col-sm-12 p-0" :suggestions="vendors" v-model="selectedVendor"></Autocomplete><br />
                <label for="typeahead-focus col-sm-12 float-left" style="display:block">Vendor : {{selectedVendor}}</label>
                <div class="col-sm-6 pl-0 pt-4">
                  <label class="demonstration d-block">Date</label>
                  <el-date-picker class="col-sm-12 p-0" v-model="entryDate" type="date" placeholder="Pick a Date" format="dd/MM/yyyy" :picker-options="pickerOptions1"></el-date-picker>
                </div>
                <div class="col-sm-6 pl-0 pr-0 pt-4">
                  <label class="d-block">Bill No:</label>
                  <input type="text" class="form-control" style="height:40px;" />
                </div>
                <div class="col-sm-8 pl-0 pr-0 pt-5">
                  <label>Select User:</label>
                  <Autocomplete :suggestions="users" v-model="selectedUser"></Autocomplete>
                  <label for="typeahead-focus col-sm-12 float-left text-primary">Selected user is : {{selectedUser}}</label>
                </div>
              </div>
              <div class="col-sm-8 card vendorItems mb-0">
                <div class="card-body pl-0 pr-3 pt-1">
                  <table id="vendor-items" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr style="background:#f4f4f4;">
                        <th class="frst">&nbsp;</th>
                        <th class="scnd">
                          <label class="d-block">Select Item Name</label>
                          <Autocomplete :suggestions="items" v-model="selectedItem"></Autocomplete>              
                        </th>
                        <th class="thrd">
                          <label class="d-block">No. of Boxes<span class="text-primary"> (if applicable)</span></label>
                          <input type="text" class="form-control col-sm-4" placeholder="Boxes" v-model="noBoxes">
                        </th>
                        <th class="frth">
                          <label class="d-block">Qty. in each box</label>
                          <input type="text" class="form-control col-sm-4" placeholder="Quantity" v-model="quantity">
                        </th>
                        <th class="ffth">
                          <label class="d-block">Add Item(s)</label>
                          <a class="col-sm-6 btn btn-primary btn-outline text-dark p-2" @click="addItem">+</a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="background:#fff;position:relative;">
                        <div class="poAbs">
                          <div class="col-sm-12 p-0">
                            <div class="col-sm-2"><ins>Sr no.</ins></div>
                            <div class="col-sm-3"><ins>Item Name</ins></div>
                            <div class="col-sm-2"><ins>Boxes</ins></div>
                            <div class="col-sm-2"><ins>Quantity</ins></div>
                            <div class="col-sm-2">&nbsp;</div>
                          </div>
                        </div>
                      </tr>
                      <tr style="position:relative;">
                        <div class="poAbs mt-5">
                          <div class="col-sm-12 p-0" v-for="(ai,index) in addedItems">
                            <div class="col-sm-2 pt-1 pb-1">{{index+1}}.</div>
                            <div class="col-sm-3 pt-1 pb-1">{{ai.item}}</div>
                            <div class="col-sm-2 pt-1 pb-1">{{ai.boxes}}</div>
                            <div class="col-sm-2 pt-1 pb-1">{{ai.quantity}}</div>
                            <div class="col-sm-2 pt-1 pb-1">&nbsp;</div>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="fab fab-fixed">
                <a class="btn btn-primary btn-outline mr-5 text-dark">Submit</a>
              </div>
            </div>
            <div class="tab-pane fade" id="Out">
              <br />
              <div class="col-sm-4 brdr">
                <label class="col-sm-12 float-left mb-0 pl-0">Collector Name:</label><br />
                <Autocomplete class="col-sm-12 p-0" :suggestions="vendors" v-model="selectedVendor"></Autocomplete><br />
                <label for="typeahead-focus col-sm-12 float-left" style="display:block">Selected Collector : {{selectedVendor}}</label>
                <div class="col-sm-8 pl-0 pr-0 pt-3">
                  <label>Location:</label>
                  <Autocomplete :suggestions="users" v-model="selectedUser"></Autocomplete>
                  <label for="typeahead-focus col-sm-12 float-left text-primary">Location selected : {{selectedUser}}</label>
                </div>
                <div class="col-sm-6 pl-0 pt-4">
                  <label class="demonstration d-block">Date</label>
                  <el-date-picker class="col-sm-12 p-0" v-model="entryDate" type="date" placeholder="Pick a Date" format="dd/MM/yyyy" :picker-options="pickerOptions1"></el-date-picker>
                </div>
              </div>
              <div class="col-sm-8 card vendorItems mb-0">
                <div class="card-body pl-0 pr-3 pt-1">
                  <table id="vendor-items" class="table table-striped table-bordered dataTable display" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr style="background:#f4f4f4;">
                        <th class="frst">&nbsp;</th>
                        <th class="scnd">
                          <label class="d-block">Select Item Name</label>
                          <Autocomplete :suggestions="items" v-model="selectedItem"></Autocomplete>              
                        </th>
                        <th class="thrd">
                          <label class="d-block">Qty. in each box</label>
                          <input type="text" class="form-control col-sm-4" placeholder="Quantity" v-model="quantity">
                        </th>
                        <th class="ffth">
                          <label class="d-block">Add Item(s)</label>
                          <a class="col-sm-6 btn btn-primary btn-outline text-dark p-2" @click="addItem">+</a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="background:#fff;position:relative;">
                        <div class="poAbs">
                          <div class="col-sm-12 p-0">
                            <div class="col-sm-2"><ins>Sr no.</ins></div>
                            <div class="col-sm-3"><ins>Item Name</ins></div>
                            <div class="col-sm-2"><ins>Quantity</ins></div>
                            <div class="col-sm-2">&nbsp;</div>
                          </div>
                        </div>
                      </tr>
                      <tr style="position:relative;">
                        <div class="poAbs mt-5">
                          <div class="col-sm-12 p-0" v-for="(ai,index) in addedItems">
                            <div class="col-sm-2 pt-1 pb-1">{{index+1}}.</div>
                            <div class="col-sm-3 pt-1 pb-1">{{ai.item}}</div>
                            <div class="col-sm-2 pt-1 pb-1">{{ai.quantity}}</div>
                            <div class="col-sm-2 pt-1 pb-1">&nbsp;</div>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="fab fab-fixed">
                <a class="btn btn-primary btn-outline mr-5 text-dark">Submit</a>
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
      receivers:[],
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
</style>
