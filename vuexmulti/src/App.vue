<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <input v-model="countNum" v-on:input="changeInput" />
    <Counter v-for="n in getNum()" v-bind:key="n" v-bind:index="n" />
    <span>sum: {{$store.getters.getSum}}</span>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "app",
  data() {
    return {
      countNum: 0,
      inputNum: 0
    };
  },
  components: {
    Counter
  },
  methods: {
    getNum: function() {
      if (this.isNumber(this.countNum)) {
        return parseInt(this.countNum);
      } else {
        return 0;
      }
    },
    isNumber: function(n) {
      return !isNaN(parseFloat(n) && isFinite(n));
    },
    changeInput() {
      this.$store.commit("changeInput", this.getNum());
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
