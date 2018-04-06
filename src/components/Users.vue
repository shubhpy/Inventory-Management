<template>
<div class="main-content p-0" id="inner-remaining">
    <div class="card h-fullscreen pt-5 mb-0 pl-3">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs">
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link active" data-toggle="tab" href="#Users">Users</a>
            </li>
            <li class="nav-item col-sm-2 float-left p-0">
              <a class="nav-link" data-toggle="tab" href="#Vendors">Vendors</a>
            </li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane fade active show" id="Users"></div>
            <div class="tab-pane fade" id="Vendors"></div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users'
}
</script>

<style>
</style>