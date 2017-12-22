<template>
  <div class="app">
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 sidebar">
          <ul v-for="(item, index) in sideItems" :key="index">
            <li>
              <a href="javascript:;" @click="item.isShow = !item.isShow" :aria-controls="item.title" 
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
    name: 'Main',
    data() {
      return {
        sideItems: [
          {
            title: 'SIDE',
            isShow: true,
            children: [
              {
                name: 'side1',
                icon: 'fa fa-user',
                url: '/main/side1'
              },
              {
                name: 'side2',
                icon: 'fa fa-lock',
                url: '/main/side2'
              }
            ]
          },
          {
            title: 'SIDE',
            isShow: false,
            children: [
              {
                name: 'side3',
                icon: 'fa fa-arrow-circle-left',
                url: '/main/side3'
              },
              {
                name: 'side4',
                icon: 'fa fa-arrows-alt',
                url: '/main/side4'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all 0 ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>