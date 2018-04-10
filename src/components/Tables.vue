<template>
  <div class="main-content p-0">
    <div class="card h-fullscreen pt-5 mb-0">
      <div class="card-body pl-3 pr-3 pt-5">
        <table id="user" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
          <thead>
            <tr role="row">
              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" v-for="headr in header">{{headr}}</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" class="odd">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <fixed></fixed>
    </div>
  </div>
</template>

<script>
  export default {
    component:'fixed',
    name: 'Users',
    data () {
      return {
        tablOpen:null,
        tabls:[
          { item:"pen",on:"123",loc:"NABH",ri:"20" },
          { item:"pencil",on:"225",loc:"EB",ri:"10" },
          { item:"stapler",on:"40",loc:"IMA",ri:"15" }
        ],
        header:["S.NO.","Item","Boxes","Total Quantity","Remaining","NABH","NABET"]
      }
    },
    created() {
      fetch( this.$hostname + 'tabledetails' )
        .then( response => response.json() )
        .then( json => {
          console.log( json )
          if ( json.success ) {
            this.tabls = json.result
            console.log(this.tabls)
          } else {
            alert("API is working")
        }
      })
    }
  }
</script>