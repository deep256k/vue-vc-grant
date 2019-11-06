<template>
  <div id="app">
   <top-bar></top-bar>
   <nav-bar></nav-bar>
    <!-- //<h1>params {{this.id}}</h1> -->
    <div> params{{ currentRouteName }}</div>
   <router-view></router-view>
   <vc-footer></vc-footer>
  
   <!-- <button @click="getData">Get</button>  -->
  </div>
</template>

<script>
import NavBar from '../src/components/TheNavBar.vue'
import TopBar from '../src/components/TheTopBar.vue'
import VcFooter from '../src/components/TheFooter.vue'

import axios from 'axios'
export default {
  data(){
    return{
      id : this.$route.name
    }
  },
  components:{
    NavBar,
    TopBar,
    VcFooter

  },
  computed: {
    currentRouteName() {
        return this.$route.path;
    }
},
  created(){
        this.$store.dispatch('commitData');
        this.$store.dispatch('commitCharityData')
  },
  methods:{
    // getData(){
    //   axios.get('http://demo7246422.mockable.io/').then(res => {
    //     const data = res
    //     console.log("sfjhsjhf123",data.data)
    //   }).catch(err => console.log("error is",err))
    // },
    
  }
}
</script>

<style lang= "scss">
.route-link{
    cursor: pointer;
}
body{
  margin: 0px;
}
.max-width-container{
  max-width: 1240px;
  margin: 0 auto;
}
input,select,button:focus{
    outline: none;
}
p{
  margin: 0px;
}

</style>
