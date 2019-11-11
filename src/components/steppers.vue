<template>
<div class="steppers-container">
    <div class="first-stepper" @mouseover="activeFirst = true ? currentRouteName == '/grant/step3' || currentRouteName == '/grant/step2': false" 
     @mouseleave="activeFirst = false">
    <div class="steppers top-margin" >
        <p class ="stepper-heading">Step1</p>
        <p class="stepper-content">Charity, Purpose and Recognition</p>
    </div>
    <div v-if="activeFirst" class="stepper-style">
        <p>{{getStepperData[0].name}}</p>
        <p class="stepper-text">EIN : {{getStepperData[0].EIN}}</p>
        <p>Purpose : {{getPurposeOption}}</p>
        <button class="stepper-button" @click="stepperFirstRoute">Edit</button>
    </div>
    </div>
    <div class="second-stepper" 
    @mouseover="activeSecond = true ? currentRouteName == '/grant/step3': false" @mouseleave="activeSecond = false">
     <div class="steppers stepper-margin" 
     :class="{'active-route' : currentRouteName == '/grant/step2' || currentRouteName == '/grant/step3'}"
     >
        <p class ="stepper-heading">Step2</p>
        <p class="stepper-content">Grant Allocation and Schedule</p>
    </div>
    <div v-if="activeSecond" class="stepper-style">
        <p>Timing : {{allocDate.slice(0,15)}} </p>
        <p class="stepper-text">Grant Amount :  {{alloc.grantAmount}} </p>
        <button class="stepper-button" @click="stepperSecondRoute">Edit</button>
    </div>
    </div>
     <div class="steppers third-step" :class="{'active-route' : currentRouteName == '/grant/step3'}">
        <p class ="stepper-heading">Step3</p>
        <p class="stepper-content">Review Grant and Submit</p>
    </div>
</div>
</template>
<script>
import { eventBus } from '../main'
export default {
    data(){
        return{
           // routerPath : ""
           activeFirst:false,
           activeSecond:false,
           alloc:'',
           allocDate:'',
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.path;
    },
    getStepperData(){
         return this.$store.getters.getcharityInformationData
    },
     getPurposeOption(){
            return this.$store.getters.getOption
    },
     getAllocData(){
            return this.$store.getters.getAllocationData
    },
},
methods:{
    stepperFirstRoute(){
        this.$router.push({name:'GrantPurpose'})
        this.activeFirst = false;
    },
    stepperSecondRoute(){
      this.$router.push({name:'GrantAllocation'})
        this.activeSecond = false;
    }
},
created(){
     eventBus.$on('recognitionData',(data2) => {
            //console.log("recived form data" , data1)
            this.alloc = data2;
            this.allocDate = this.alloc.selectedDate.toString() 
        })
},
}
</script>
<style scoped>
.steppers{
     width: 174px;
     height: 145px;
     border: solid 1px #dcdcdc;
    background-color: #ffffff;
    padding: 20px;
    border-left: 7px solid #dcdcdc;
    cursor: pointer;
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.1);
}
.steppers-container{
    margin-right: 30px;
}
.stepper-heading{
    font-family: HelveticaNeue-Bold;
    font-size: 16px;
    color: #006778;
}
.stepper-content{
    font-family: BerkeleyStd;
    font-size: 16px;
    color: #727272;
    padding-top: 25px;
}
.stepper-margin{
    margin: 10px 0px;
}
.top-margin{
    margin-top: 38px;
    border-left: 7px solid #006778
}
.active-route{
   border-left: 7px solid #006778  
}
 .stepper-style{
    position: absolute;
    top: 0px;
    left: 174px;
    width: 341px;
    height: 145px;
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #dcdcdc;
    z-index: 100;
    background-color: rgba(0, 103, 120, 0.9);
    font-family: HelveticaNeue;
    font-size: 14px;
    color:#ffffff;
    padding: 20px;
}
.first-stepper,.second-stepper{
    position: relative;
    
}
.stepper-text{
    padding: 10px 0px;
}
.stepper-button{
    width: 71px;
  height: 23px;
  border-radius: 18px;
  border: solid 1px #d4d4d4;
  background-color: #f5f5f5;
  float: right;
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #006778;
}
</style>