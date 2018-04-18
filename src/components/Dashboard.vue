<template>
<div>
    <aside class="sidebar sidebar-icons-right sidebar-icons-boxed h-fullscreen">
    <nav class="sidebar-navigation ps-container ps-theme-default ps-active-y">
        <ul class="menu">
        <li class="menu-category menu-item pr-0">
            <router-link class="menu-link rounded-left pl-3" tag="li" to="/users">Names</router-link> 
        </li>
        <li class="menu-category menu-item pr-0">
            <router-link class="menu-link rounded-left pl-3" tag="li" to="/tables">Tables</router-link> 
        </li>
        <li class="menu-category menu-item pr-0">
            <router-link class="menu-link rounded-left pl-3" tag="li" to="/itementry">Items IN/OUT</router-link>         
        </li>
        </ul>
    </nav>
    </aside>
    <header class="topbar">
        <div class="topbar-right">
            <a class="topbar-btn text-white" data-toggle="quickview" @click="logout">Logout<i class="ti-power-off"></i></a>
        </div>
    </header>
    <main class="main-container">
        <router-view></router-view>
    </main>
</div>
</template>
<script>
    import router from '../router'
    export default {
    name: 'Dashboard',
    methods : {
        logout: function(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('vuex');        
        router.push({ name:"Login"});
        }
    }
}
</script>
<style>
.menu-category::after{
    top:60%;
} .dataTables_wrapper .dataTables_paginate .paginate_button:hover{
    background-color:transparent;
    background:transparent;
}
</style>