<template>
  <div class="main-content p-0">
    <div class="card h-fullscreen pt-5 mb-0 pl-3 pr-3">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs">
            <li class="nav-item col-sm-1 float-left p-0 mr-4">
              <a class="nav-link active" data-toggle="tab" href="#Items">Items</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0 mr-4">
              <a class="nav-link" data-toggle="tab" href="#VenHis">Vendor History</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="Items">
              <div class="card-body">
                <input type="text" v-model="searchItemkey" class="form-control col-sm-3 mt-3 ml-4" placeholder="Search Items" title="Type a name" />
                <table id="user" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                  <thead>
                    <tr role="row">
                      <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" v-for="headr in header">{{headr}}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" class="odd" v-for="row in rows">
                      <td v-for="val in row">{{val}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="VenHis">
              <div class="card-body">
                <div class="accordion" id="accordion-1">
                  <div class="card col-sm-6 p-0">
                    <h5 class="card-title m-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapse-1-1" aria-expanded="false" class="collapsed d-block p-3 text-dark">
                        Vendor Name
                      </a>
                    </h5>
                    <div id="collapse-1-1" class="collapse mb-4">
                      <div class="card-body">1</div>
                    </div>
                  </div>
                  <div class="card col-sm-6 p-0">
                    <h5 class="card-title m-0 bg-secondary">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapse-1-2" class="collapsed d-block p-3 text-dark" aria-expanded="false">
                        Vendor Name
                      </a>
                    </h5>
                    <div id="collapse-1-2" class="collapse mb-4">
                      <div class="card-body">2</div>
                    </div>
                  </div>
                  <div class="card col-sm-6 p-0">
                    <h5 class="card-title m-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapse-1-3" class="collapsed d-block p-3 text-dark" aria-expanded="false">
                        Vendor Name
                      </a>
                    </h5>
                    <div id="collapse-1-3" class="collapse mb-4">
                      <div class="card-body">3</div>
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
<style>
.accordion .card {
  height:auto;
  background-color:#fff;/* 
  border:1px solid #f1f2f3; */
  margin-bottom: 16px;
}

.accordion .card-title{
  background-color:#fcfcfc;
  border-bottom:1px solid rgba(77,82,89,0.07);
}

.accordion .card-title a::before{
  content:"\e648";
  display:inline-block;
  font-family:themify;
  font-size:12px;
  margin-right:20px;
  margin-left:-33px;
  -webkit-transition:.2s linear;
  transition:.2s linear}
</style>
<script>
  export default {
    name: 'Users',
    data () {
      return {
        searchItemkey:null,
        tablOpen:null,
        rows_:[],
        header_:[],
          // { item:"pen",on:"123",loc:"NABH",ri:"20" },
          // { item:"pencil",on:"225",loc:"EB",ri:"10" },
          // { item:"stapler",on:"40",loc:"IMA",ri:"15" }
          }
    },
    computed:{
      rows (){
        /* var details =  [[0, "marker", 
              24, 
              246, 
              235, 
              11, 
              0
            ], 
            [
              1, 
              "bags", 
              20, 
              200, 
              189, 
              0, 
              11
            ]
          ] */
        if (this.searchItemkey){
          return this.rows_.filter(row => {
            return row[1].toLowerCase().includes(this.searchItemkey.toLowerCase())
          })
        }else{
          return this.rows_
        }
      },
      header (){
     /*  var headers = [
          "Serial.No", 
          "Item", 
          "Boxes", 
          "Quantity Total", 
          "Quantity_Remaining", 
          "NABL", 
          "NABH"
        ] */
        return this.header_
      }
      },
    created() {
      fetch( this.$hostname + 'tabledetails' )
        .then( response => response.json() )
        .then( json => {
          console.log( json )
          if ( json.success ) {
            this.rows_ = json.details
            this.header_ = json.headers
          } else {
            alert("API is working")
        }
      })
    }
  }
</script>