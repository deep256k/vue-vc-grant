<template>
    <div class = "grant-review">
     <div class="review-heading">
        <section-heading :section-heading = "sectionHeading"></section-heading>
        <p>Review your grant recommendation information below, edit it if necessary, before submitting.</p>
     </div>
     <section class="charity-info">
     <div class="charity-info-wrapper">
         <div class="charity-name">
             <p class= "charity-name-heading">Charity Information</p>
             <p class="section-content">Full Charity Name</p>
             <p class="selected-content">{{getCharityinfo[0].name}}</p>
         </div>
         <div class="charity-purpose">
             <p class= "charity-name-heading">Grant Purpose & Recognition</p>
             <p class="section-content">Purpose</p>
             <p class="selected-content">{{getSelectedOption}}</p>
         </div>
    </div>
    </section>
    <section class="charity-info">
     <div class="charity-info-wrapper">
         <div class="charity-name">
             <p class="section-content">Address</p>
             <p class="selected-content">{{getCharityinfo[0].Address}}</p>
         </div>
         <div class="charity-purpose">
             <p class="section-content bold-heading">Grant Recognition</p>
             <div v-if="getRadioInfo.buttonClicked == 'one'" class="advisor-details">
             <div class="recon">
                 <span class = "recognition-heading">Account Advisor Name:</span>
                 <span class = "recognition-content">{{getAdvosorInfo.advisorFirstName}} {{getAdvosorInfo.advisorLastName}}</span>
             </div>
             <div>
                 <span class = "recognition-heading">Account Advisor Email:</span>
                 <span class = "recognition-content">{{getAdvosorInfo.advisorEmail}}</span>
             </div>
             </div>
             <div v-if="getRadioInfo.buttonClicked == 'three'">
                 <span class = "recognition-heading">Account Name:</span>
                 <span  class = "recognition-content">{{getFundName[0].fundName }}</span>
             </div>
             <div v-if="getRadioInfo.buttonClicked == 'three'">
                 <span class = "recognition-heading">Grant Type:</span>
                 <span  class = "recognition-content">Anonymous</span>
             </div>
         </div>
    </div>
    </section>
     <section class="charity-info">
     <div class="charity-info-wrapper">
         <div class="charity-name">
             <p class="section-content">EIN</p>
             <p class="selected-content">{{getCharityinfo[0].EIN}}</p>
         </div>
         <div class="charity-purpose-wrapper">
         <div v-if="getFormdata.firstName" class="charity-purpose">
             <p class="section-content">Please Notify</p>
             <p class="selected-content">{{getFormdata.firstName}} {{getFormdata.lastName}}</p>
         </div>
          <div v-if = "getFormdata.honorName" class="charity-purpose">
             <p class="section-content">Additional Attribution</p>
             <p class="selected-content">{{getFormdata.honorName}}</p>
         </div>
         </div>
    </div>
    </section>
    <section class="charity-info">
     <div class="charity-info-wrapper">
         <div class="charity-name">
             <p class= "charity-name-heading">Recommended Amount and Allocation</p>
             <p class="section-content">Payment</p>
             <p class="selected-content">One time payment</p>
             <p class="section-content padding-top">Timing</p>
             <p class="selected-content">{{date.selectedDate}}</p>
             <p class="section-content padding-top">Grant Amount</p>
             <p class="selected-content">{{date.grantAmount}}</p>
         </div>
         <!-- <div class="charity-purpose">
             <p class="section-content">Allocation preference</p>
             <p class="selected-content">props</p>
         </div> -->
    </div>
    </section>
    <!-- <h1>selected {{date}}</h1> -->
    <div class="button-wrapper"> 
    <back-button :button-input = "backInput" @back-step = "navigatetoBack"></back-button>
    <back-button :button-input = "exitInput" @back-step = "navigatetoExit"></back-button>
    <next-button :button-input = "nextInput" @next-step = "navigatetoReview"></next-button>
    </div>
    </div>
</template>
<script>
import SectionHeading from '../../components/SectionHeading.vue'
import BackButton from '../../components/Buttons/BackButton.vue'
import NextButton from '../../components/Buttons/NextButton.vue'
import { eventBus } from '../../main' 
export default {
    components:{
        SectionHeading,
        BackButton,
        NextButton
    },
    data(){
        return{
            sectionHeading:"Review Your Grant",
             backInput:'Back',
             exitInput: 'Exit',
             nextInput:'Next',
             date:'123',
            // modifiedDate : this.date.selectedDate.slice(0,15),
        }
    },
    methods:{
       navigatetoReview(){
           this.$router.push({name:'GrantReview'})
       },
       navigatetoExit(){
           this.$router.push({name:'Home'})
       },
       navigatetoBack(){
          this.$router.push({name:'GrantAllocation'}) 
       } 
    },
    computed:{
        getCharityinfo(){
            return this.$store.getters.getcharityInformationData
        },
        getSelectedOption(){
            return this.$store.getters.getOption
        },
        getFormdata(){
            return this.$store.getters.getFormData
        },
        getFundName(){
            return this.$store.getters.getData
        },
        getAdvosorInfo (){
            return this.$store.getters.getAdvisorData
        },
        getRadioInfo () {
            return this.$store.getters.getRadioOption
        },
        getAllData(){
            return this.$store.getters.getAllocationData
        }
    },
    created(){
        // console.log('recived data',this.$store.getters.getcharityInformationData)
        // console.log('recived data', this.$store.getters.getOption)
        //console.log('recived form data', this.$store.getters.getRadioOption)
            eventBus.$on('recognitionData',(data1) => {
            //console.log("recived form data" , data1)
            this.date = data1;

        })
        //console.log("allData",this.$store.getters.getAllocationData)
    }
}
</script>
<style scoped lang="scss">
.review-heading{
    padding-bottom:50px;
    border-bottom: 1px solid #505050;
    p{
        padding-top: 15px;
        margin: 0px;
    }
    
}
.charity-info{
    padding: 50px 0px 20px 0px;
    border-bottom: 1px solid #505050;
}
.charity-info-wrapper{
        display: flex;
        justify-content: space-between;
        width: 100%;
        
}
.charity-name-heading{
    font-family: BerkeleyStd;
    font-size: 24px;
    color: #022737;
    padding-bottom: 15px;
}
.section-content{
    font-family: HelveticaNeue;
    font-size: 16px;
    color: #505050;
}
.selected-content{
    font-family: HelveticaNeue-bold;
    font-size: 16px;
    color: #022737;
}
.recognition-heading{
    font-family: HelveticaNeue;
    font-size: 16px;
     color: #022737;
}
.recognition-content{
    font-family: HelveticaNeue-bold;
    font-size: 16px;
     color: #022737;
}
.recognition-content{
font-family: HelveticaNeue-bold;
}
.charity-name,.charity-purpose{
    width: 100%;
}
.button-wrapper{
    padding-top: 50px;
}
.charity-purpose-wrapper{
    width: 50%;
    display: flex;
    justify-content: space-between;
}
.bold-heading{
font-family: HelveticaNeue-bold;
}
.recon{
    padding-bottom: 10px;
}
.padding-top{
    padding-top:10px;
}
</style>