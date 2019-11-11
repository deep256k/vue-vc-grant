<template>
   <div class = "max-width-container grant-allocation">
    <div class="allocation-amount">
        <section-heading :section-heading = "sectionHeading"></section-heading>
        <span>Issue Date:</span>
        <datepicker placeholder="Select Date" v-model="selectedDate"></datepicker>
        <!-- <h1>{{selectedDate}}</h1> -->
        <span>Grant Amount:</span>
        <input type="text" v-model="grantAmount">
        <p class="vc-note">*Please note that this amount will be encumberedonce the grant agreement is approved by Vanguard Charitable and funds will be unavailable for other purposes through the term of the agreement.</p>  
    </div>
    <!-- <div class="selected-grant">
         <section-heading :section-heading = "garntHeading"></section-heading>
         <p class="decided-fund">Decide fund allocation for the charity selected.</p>
         <p class="allocation-preference">Select Allocation Preference</p>
    <select>
                <option>Grant Allocation by Weighted Percentage</option>
                <option>Annual Fund</option>
  </select>
  <table>
      <tr>
          <th v-for = "heading in tableHeading" :key="heading.ids">{{heading}}</th>
      </tr>
      <tr v-for = "data in allocationData.data" :key= "data.ids">
        <td>{{data.fundName}}</td>
        <td>{{data.availableBalance}}</td>
        <td>{{data.allocatedPercentage}}</td>
        <td><input type="text" v-model="data.allocatedPercentage" class=""></td>
      </tr>
  </table>
  </div> -->

    <back-button :button-input = "backInput" @back-step = "navigatetoBack"></back-button>
    <back-button :button-input = "exitInput" @back-step = "navigatetoExit"></back-button>
    <next-button :button-input = "nextInput" @next-step = "navigatetoReview"></next-button>
   </div>

</template>
<script>
import SectionHeading from '../../components/SectionHeading.vue'
import BackButton from '../../components/Buttons/BackButton.vue'
import NextButton from '../../components/Buttons/NextButton.vue'
import Datepicker from 'vuejs-datepicker'
import axios from 'axios'
import { eventBus } from '../../main'
export default {
    components:{
        SectionHeading,
        BackButton,
        NextButton,
        Datepicker
    },
    data(){
        return{
            sectionHeading:"Schedule Grant",
            garntHeading:"Grant Allocation",
             backInput:'Back',
             exitInput: 'Exit',
             nextInput:'Next',
             tableHeading : ["Investment Options","Available Balance","Account Allocation","Grant Percentage","Grant Amount"],
             allocationData :'',
             selectedDate:'',
             grantAmount:''
        }
    },
    methods:{
       navigatetoReview(){
           this.$router.push({name:'GrantReview'})
         const amountData = {
             selectedDate : this.selectedDate,
             grantAmount : this.grantAmount
         }  
            // this.$emit("recognitionData",amountData)
            // console.log("emitted",amountData)
            eventBus.$emit("recognitionData",amountData)
            // console.log("emitted",this.selectedDate)
             this.$store.dispatch("commitcharityInformationData",amountData)
       },
       navigatetoExit(){
           this.$router.push({name:'Home'})
       },
       navigatetoBack(){
          this.$router.push({name:'GrantPurpose'})
       },
    },
    created(){
       axios.get('http://demo7246422.mockable.io/getInvestmentOptionDetails').then(res => {
        const data = res
        //console.log("sfjhsjhf123",data)
        this.allocationData = data;
       //console.log('1234',allocationData)
      }).catch(err => console.log("error is",err))
      
    }
}
</script>
<style scoped lang = "scss">
.vc-note{
padding: 30px 0px 50px 0px;
border-bottom: 1px solid #505050;
margin-bottom: 30px;
}
.selected-grant{
 padding-bottom: 50px;   
}
.vdp-datepicker{
    display: inline-block;
}
table {
  font-family: HelveticaNeue;
  border-collapse: collapse;
  width: 80%;
  td, th {
  text-align: left;
  padding: 8px;
}
tr td:first-of-type{
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #006778;
}
tr th{
  font-family: HelveticaNeue;
  font-size: 16px;
  color:#022737;
}
}
</style>