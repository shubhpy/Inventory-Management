<template>
<div class="main-content p-0">
  <div class="card h-fullscreen pt-5 mb-0">
    <div class="card-body pl-3 pr-3 pt-5">
    <input type="text" id="myInput" v-model="searchUserKey" placeholder="Search for names.." title="Type in a name">
      <table id="user" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
        <thead>
          <tr role="row">
            <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Sr. No.</th>
            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Item</th>
            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Opening No</th>
            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">NABH</th>
            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Remaining</th>
            <th class="th-modify sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" class="odd" v-for="row in rows">
            <td>{{row[0]}}</td>
            <td>{{row[1]}}</td>
            <td>{{row[2]}}</td>
            <td>{{row[3]}}</td>
            <td class="text-left">
              <a class="btn btn-w-md btn-danger nav-action d-inline text-white"><span class="ti-close"></span></a>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Users',
  data(){
    return {
      header : ["Item","Boxes","Remaining Quantity","NABH","NABET"],
      searchUserKey : null
      }
    },
    computed:{
      rows () {
        var rowss = [
            [0,"Stapler",20,20,20,20,20],
            [1,"Staple Pin",20,20,20,20,20],
            [2,"Pen",20,20,20,20,20],
            [3,"Pencil",20,20,20,20,20]
          ]
        if (this.searchUserKey){
          return rowss.filter(row => {
            return row[1].toLowerCase().includes(this.searchUserKey.toLowerCase())
          })
        }else{
          return rowss
        }
      }
    }
}
</script>

<style>
</style>