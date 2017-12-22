<template>
  <nav class="col-sm-3 col-md-2 sidebar">
    <ul v-for="(item, index) in sideItems" :key="index">
      <li>
        <a href="#" @click="item.isShow = !item.isShow" :aria-controls="item.title" :aria-expanded="item.isShow" class="sidebar-link"
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
</template>
<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        sideItems: [
          {
            title: 'SIDE1',
            children: [
              {
                name: 'side1-children1',
                icon: 'fa fa-user',
                url: '/'
              },
              {
                name: 'side1-children2',
                icon: 'fa fa-lock',
                url: '/side2'
              }
            ]
          },
          {
            title: 'SIDE2',
            children: [
              {
                name: 'side2-children1',
                icon: 'fa fa-arrow-circle-left',
                url: '/side2-children1'
              },
              {
                name: 'side2-children2',
                icon: 'fa fa-arrows-alt',
                url: '/side2-children2'
              }
            ]
          }
        ]
      }
    },
    computed: {}
  }
</script>

<style>
  
</style>