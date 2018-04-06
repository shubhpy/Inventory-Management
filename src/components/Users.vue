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
              <a class="nav-link" data-toggle="tab" href="#collectors">Collectors</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link" data-toggle="tab" href="#Vendors">Vendors</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="Users">
              <table id="user" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
                <thead>
                  <tr role="row">
                    <th class="th-1 sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending">Sr. No.</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Item</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Opening No</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">NABH</th>
                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1">Remaining</th>
                    <th class="th-modify">Modify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-bind:class="[open]" >
                    <td class="sorting_1">1</td>
                    <td><input type="text" class="form-control col-sm-11" placeholder="Pens" /></td>
                    <td><input type="text" class="form-control col-sm-11" placeholder="10" /></td>
                    <td><input type="text" class="form-control col-sm-11" placeholder="NABH" /></td>
                    <td><input type="text" class="form-control col-sm-11" placeholder="1" /></td>            
                    <td class="text-left pt-4">
                      <a class="btn btn-w-md btn-primary btn-outline nav-action d-inline pl-2 pr-2" @click="edit()">Edit</a>
                      <a class="btn btn-w-md btn-danger nav-action d-inline text-white pl-2 pr-2" @click="remove(t.user_id)">Del</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="Vendors">
              
            </div>
            <div class="tab-pane fade" id="collectors">
              
            </div>
            <div class="tab-pane fade" id="Vendor s">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        open: false
      }
    },
    methods: {
      edit(){
        if (this.open === false) {
          this.open = true
        }
      }
    }
  }
</script>