<template>
<div>
    <page-heading :page-heading = "grantHeding"></page-heading>
    <fund-details :fundDetails = "recivedData.data"></fund-details>
    <!-- <grant-history></grant-history> --> 
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

</div>
</template>
<script>
import FundDetails from '../components/FundDetails.vue'
import PageHeading from '../components/PageHeading.vue'
import GrantHistory from '../Epics/GrantHistory/GrantHistory.vue'
export default {
    components:{
        FundDetails,
        PageHeading,
        GrantHistory
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