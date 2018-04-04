<template>
<div>
    <aside class="sidebar sidebar-icons-right sidebar-icons-boxed h-fullscreen">
    <nav class="sidebar-navigation ps-container ps-theme-default ps-active-y">
        <ul class="menu">
        <li class="menu-category menu-item pr-0">
            <router-link class="menu-link rounded-left pl-3" to="/users">Users</router-link> 
        </li>
        <li class="menu-category menu-item pr-0">
            <router-link class="menu-link rounded-left pl-3" to="/tables">Tables</router-link> 
        </li>
        <li class="menu-category menu-item pr-0">
            <router-link class="menu-link rounded-left pl-3" to="/users">Items IN/OUT</router-link>         
        </li>
        </ul>
    </nav>
    </aside>
    <header class="topbar">
    <div class="topbar-right">
        <a class="topbar-btn text-white" data-toggle="quickview" @click="logout()"><i class="ti-power-off"></i></a>
    </div>
    </header>
    <main class="main-container">
        <router-view></router-view>    
    </main>
</div>
</template>
<script>

export default {
  name: 'Dashboard'
}
</script>

<style>
    .menu-category::after
    {
        top: 60%;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button:hover{
        background-color:transparent;
        background:transparent;
    }
</style>