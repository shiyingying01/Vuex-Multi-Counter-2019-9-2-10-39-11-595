<template>
  <div id="app">
      <span>{{index}}: </span>
    <button @click="increment">+</button>
    <span>{{getCount()}}</span>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
  export default{
      props:{
          index:Number
      },
    methods: {
getCount(){
    return this.$store.getters.getCounterByIndex(this.index);
},

        increment(){
            this.$store.commit('updateCounterByIndex',{
                index:this.index,
                value:1
            });
        },

       decrement(){
            this.$store.commit('updateCounterByIndex',{
               index:this.index,
                value:-1  
            });
        }, 

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
