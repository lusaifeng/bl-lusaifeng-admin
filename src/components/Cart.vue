<template>
  <div class="app">
    <b-input-group style="width:200px;">
      <b-input-group-button>
        <b-button @click="minsevent(count,index)">-</b-button>
      </b-input-group-button>
      <b-form-input :value="count"></b-form-input>
      <b-input-group-button slot="right">
        <b-button @click="event(count,index)">+</b-button>
      </b-input-group-button>
    </b-input-group>
  </div>
</template>
<script>
  export default {
    name: 'Side1',
    props:['count','index'],
    data() {
      return {
        
      }
    },
    methods: {
      event(count,index){
        this.$emit('newEvent',[count,index])
      },
      minsevent(count,index){
        this.$emit('minsNewEvent',[count,index])
      }
    }
  }
</script>

<style>
  
</style>