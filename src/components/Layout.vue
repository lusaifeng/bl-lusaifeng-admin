<template>
  <div class="app">
    <b-navbar toggleable type="light" variant="light">
  
      <b-button variant="outline-secondary" class="toggle-sidebar"
        @click="toggleSidebar">
        <i class="fa fa-bars"></i>
      </b-button>
      
  
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="item in navItems" :key="item.title">
          <router-link :to="item.url" active-class="active">
            {{item.navTitle}}
          </router-link>
        </li>
      </ul>

      <span>您好，欢迎登录！</span>
      <b-button variant="outline-success" to="/login">退出</b-button>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'Layout',
    computed: {},
    data() {
      return {
        navItems: [
          {
            navTitle: 'NAV1',
            url: '/main/side1'
          },
          {
            navTitle: 'NAV2',
            url: '/nav/side5'
          }
        ]
      }
    },
    methods: {
      toggleSidebar(){
        $(".sidebar").toggleClass("collapsed");
				$("#content").toggleClass("col-md-12 col-md-10");
				
				return false;
      }
    }
  }
</script>

<style>
  
</style>