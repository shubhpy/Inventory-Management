<template>
<div class="main-content p-0">
  <div class="card h-fullscreen pt-5 mb-0">
    <div class="card-body pl-3 pr-3 pt-5">

<!--      <table id="user" class="table table-striped table-bordered dataTable display pt-4" cellspacing="0" cellpadding="0">
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
          <tr role="row" class="odd" >
            <td class="sorting_1">1</td>
            <td>Stapler</td>
            <td>20</td>
            <td>5</td>
            <td>15</td>            
            <td class="text-left">
              <a class="btn btn-w-md btn-danger nav-action d-inline text-white" @click="remove(t.user_id)"><span class="ti-close"></span></a>
            </td>
          </tr>
        </tbody>
      </table>


      <div class="tab-pane">
      <Advanced></Advanced>
      </div>

      -->

      <div class="tab-pane">
        <Table></Table>
      </div>



      

    </div>
  </div>
</div>
</template>

<script>
  import Table from './Table/table';
  import Advanced from './Table/advanced';

export default {
  name: 'Users',
  components: {
      Table,
      Advanced
    },

}
</script>

<style>
</style>