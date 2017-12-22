<template>
  <div class="app">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{item.name}}数量：{{item.count}}
        <b-cart :count="item.count" :index="index" @newEvent="add" @minsNewEvent="mins"></b-cart>
      </li>
    </ul>
    <p></p>
    <b-button variant="success" @click="push">side2</b-button>
    <p></p>
    
    <div class="alert alert-warning alert-dismissible fade">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="close"  @click="alertClose">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <b-button variant="primary" @click="alertShow">alertShow</b-button>
    <p></p>
    <l-input @onInputNumberChange="onChange"></l-input>
  </div>
</template>
<script>
import BCart from "./Cart";
import LInput from './Input'
export default {
  name: "Side1",
  components: {
    BCart, LInput
  },
  data() {
    return {
      items: [
        {
          name: "苹果",
          count: 3
        },
        {
          name: "香蕉",
          count: 1
        }
      ],
      input: 13
    };
  },
  methods: {
    add(value) {
      let count = value[0];
      let index = value[1];
      this.items[index].count = count + 1;
    },
    mins(value) {
      let count = value[0];
      let index = value[1];
      this.items[index].count = count - 1;
    },
    push() {
      const userId = 123, userName = 'name'
      this.$router.push({ name: "side2", query: { userId, userName } });
      console.log(this.$route.meta);
    },
    alertShow(){
      $('.alert').addClass('show')
    },
    alertClose(){
      $('.alert').removeClass('show')
    },
    onChange(value) {
      console.log(value)
    }
  }
};
</script>

<style>

</style>