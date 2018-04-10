<template>
  <div style="margin: 0 auto; width: 1200px">
    <code>query: {{ query }}</code>
    <datatable v-bind="$data" />
  </div>
</template>

<script>
  import mockData from '../_mockData'
  import FilterTh from './comps/th-Filter'

  export default {
    data: () => ({
      components : {
        FilterTh
      },
      fixHeaderAndSetBodyMaxHeight: 600,
      tblStyle: 'table-layout: fixed', // must
      tblClass: 'table-bordered',
      columns: [{
          title: 'S. No.',
          field: 'uid',
          sortable: true,
          fixed: true
        },
        {
          title: 'Item',
          field: 'name',
          fixed: true,
          thComp: 'FilterTh'
        },
        {
          title: 'Total In',
          field: 'age',
          sortable: true,
          fixed: true          
        },
        {
          title: 'Remained',
          field: 'age',
          fixed: true          
        },
        {
          title: 'NABH',
          field: 'age'
        },
        {
          title: 'NABET',
          field: 'age'
        },
        {
          title: 'ZED',
          field: 'age'
        },
        {
          title: 'WHO',
          field: 'age'
        }
      ].map(col => (col.colStyle = {
        width: '150px'
      }, col)),
      data: [],
      summary: {},
      total: 0,
      query: {}
    }),
    watch: {
      query: {
        handler(query) {
          mockData(query).then(({
            rows,
            total,
            summary
          }) => {
            this.data = rows
            this.total = total
            this.summary = summary
          })
        },
        deep: true
      }
    }
  }
</script>