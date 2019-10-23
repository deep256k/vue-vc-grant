<template>
    <div class="max-width-container test">
        <grantee-contact @advisorData = "advisorData = $event"></grantee-contact>
        <purpose-deatils @checkClicked = "check =$event"></purpose-deatils>
         <grant-recongnition @formData = "formData = $event"
                               @radioClicked = "radioData = $event" ></grant-recongnition>                  
        <!-- <publish-grant></publish-grant> -->
        <back-button :button-input = "backInput" @back-step = "navigatetoBack"></back-button>
        <back-button :button-input = "exitInput" @back-step = "navigatetoExit"></back-button>
        <next-button :button-input = "nextInput" 
        @next-step = "navigateToAllocation" :disabled = " this.radioData.buttonClicked && this.advisorData.advisorFirstName && this.advisorData.advisorLastName &&  this.advisorData.advisorLastName.advisorEmail  == '' "
        ></next-button>
    </div>
</template>
<script>
import GranteeContact from './GranteeContact.vue'
import PurposeDeatils from './PurposeDetails.vue'
import PublishGrant from './PublishGrant'
import GrantRecongnition from './GrantRecongnition.vue'
import BackButton from '../../components/Buttons/BackButton.vue'
import NextButton from '../../components/Buttons/NextButton.vue'
export default {
    components:{
         GranteeContact,
        PurposeDeatils,
        PublishGrant,
        BackButton,
        NextButton,
        GrantRecongnition
    },
    data(){
        return{
            backInput:'Back',
            exitInput: 'Exit',
            nextInput:'Next',
            formData:{},
            advisorData:{},
            radioData:'',
            check:false,
        }
    },
    methods:{
       navigateToAllocation(){
           this.$router.push({name:'GrantAllocation'});
           this.$store.dispatch('commitreconginationData',this.formData)
           this.$store.dispatch('commitAdvisorData',this.advisorData)
           this.$store.dispatch('commitRadioOption',this.radioData)

       },
       navigatetoExit(){
           this.$router.push({name:'Home'})
       },
       navigatetoBack(){
          this.$router.push({name:'GrantHistory'}) 
       },
    },
}
</script>
<style scoped>
button[disabled=disabled], button:disabled {
   opacity: 0.4;
  cursor: not-allowed
}
</style>