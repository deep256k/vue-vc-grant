<template>
<div>
    <page-heading :page-heading = "grantHeding"></page-heading>
    <fund-details :fundDetails = "recivedData.data"></fund-details>
    <div class="grant-layout max-width-container">
          <steppers></steppers>
    <!-- <grant-history></grant-history> --> 
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
   

</div>
</template>
<script>
import FundDetails from '../components/FundDetails.vue'
import PageHeading from '../components/PageHeading.vue'
import GrantHistory from '../Epics/GrantHistory/GrantHistory.vue'
import steppers from    '../components/steppers.vue'
export default {
    components:{
        FundDetails,
        PageHeading,
        GrantHistory,
        steppers
    },
    data(){
     return{
         grantHeding:"Request a Grant Agreement",
     }
   },
   computed:{
       recivedData(){
           return this.$store.getters.getData
       }
   },
   created(){
      // console.log("jksdjksjdkjsdkj", this.$store.getters.getData);
   } 
    
}
</script>
<style scoped>
.grant-layout{
    display: flex;
    justify-content: flex-start;
}
</style>