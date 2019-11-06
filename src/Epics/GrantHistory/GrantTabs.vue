<template>
    <div class ="max-width-container">
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Recent Supported Charities" active>
        <b-card-text><grant-table :tableData = "getCharityTable.data" 
                                  :openModal = "open" @launch-modal = "launch = $event" @modalStatus = "open = $event">
         </grant-table></b-card-text>
      </b-tab>
      <b-tab title="Saved Charities">
        <b-card-text><grant-table :tableData = "getCharityTable.data" ></grant-table></b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
  <grant-modal :launchData = "launch" v-if = "open">
    <button @click="navigateToPurpose" class="modal-button">Confirm</button>
  </grant-modal>
</div>
</template>
<script>
import GrantTable from './GrantTable.vue'
import GrantModal from './GrantModal.vue'
export default {
  data (){
      return{
        launch:'',
        open:true,
      }
    },
    components:{
        GrantTable,
        GrantModal
    },
    computed:{
         getCharityTable (){
           return this.$store.getters.getCharityData
         }
    },
    created(){
      console.log("charity data",typeof this.$store.getters.getCharityData)
     // console.log("launch",this.launch)
    },
    methods:{
      navigateToPurpose(){
         this.$router.push({name:'GrantPurpose'}),
         this.open = false
      }
    }
}
</script>
<style scoped>
.max-width-container{
    padding-top: 15px;
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
.modal-button{
  position:absolute;
  right: 20px;
  bottom: 20px;
  width: 150px;
  height: 50px;
  background-color: #006778;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #ffffff;
}
</style>