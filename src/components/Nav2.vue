<template>
  <div class="app">
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 sidebar">
          <ul v-for="(item, index) in sideItems" :key="index">
            <li>
              <a href="#" @click="item.isShow = !item.isShow" :aria-controls="item.title" 
                :aria-expanded="item.isShow" class="sidebar-link"
                :class="{'active':item.isShow}">
                {{item.title}}
                <i class="fa pull-right" :class="item.isShow?'fa-angle-down':'fa-angle-right'"></i>
              </a>
      
              <b-collapse :id="item.title" v-model="item.isShow">
                <ul class="dropdownMenu">
                  <li v-for="(item, index) in item.children" :key="index">
                    <router-link :to="item.url" active-class="active">
                      <i v-if="item.icon" :class="item.icon"></i> {{item.name}}
                    </router-link>
      
                  </li>
                </ul>
              </b-collapse>
            </li>
          </ul>
        </nav>

        <main role="main" id="content" class="col-md-10 pt-3">
          <transition name="slide-fade">
            <router-view>
            </router-view>
          </transition>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Nav2',
    components: {},
    data() {
      return {
        sideItems: [
          {
            title: 'SIDE',
            isShow: true,
            children: [
              {
                name: 'side5',
                icon: 'fa fa-user',
                url: '/nav/side5'
              },
              {
                name: 'side6',
                icon: 'fa fa-user',
                url: '/nav/side6'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  
</style>