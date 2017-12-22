<template>
  <div class="app">
    <input 
      type="text" 
      class="form-control" 
      :value="currentValue">
  </div>
</template>
<script>
export default {
  name: "LInput",
  props: ['input'],
  data() {
    return {
      currentValue: this.input
    }
  },
  methods: {
    
  }
};
</script>

<style>

</style>