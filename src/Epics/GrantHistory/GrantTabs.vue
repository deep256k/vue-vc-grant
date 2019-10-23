<template>

    <div class ="max-width-container">
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Recent Supported Charities" active>
        <b-card-text><grant-table :tableData = "getCharityTable.data"></grant-table></b-card-text>
      </b-tab>
      <b-tab title="Saved Charities">
        <b-card-text><grant-table :tableData = "getCharityTable.data"></grant-table></b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>
<script>
import GrantTable from './GrantTable.vue'
export default {
    components:{
        GrantTable
    },
    computed:{
         getCharityTable (){
           return this.$store.getters.getCharityData
         }
    },
    created(){
      console.log("charity data",typeof this.$store.getters.getCharityData)
    }
}
</script>
<style scoped>
.max-width-container{
    padding-top: 30px;
}
.card{
    border:none;
}
.card-header{
    background-color: none;
}
.nav-tabs .nav-link.active{
  font-family: HelveticaNeue-bold;
  font-size: 16px;
  color: #006778;
}
</style>