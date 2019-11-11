<template>
    <div class="grant-recong">
        <section-heading :section-heading = "sectionHeading"></section-heading>
        <p recon-heading>Select Entities to be Mentioned on the Letter:</p>
        <div class="recon-options">
        <p> <input type="radio" name="advisor" value = "one" v-model = "checked"><span class="radio-content">Account Advisor name,address and philanthropic account</span></p>
       <p> <input type="radio" name="advisor" value = "two" v-model = "checked"><span class="radio-content">I would like to remain anonymous. </span> </p>
       <!-- <p> <input type="radio" name="advisor" value = "three" v-model = "checked"> Name : <span class="fund-name">{{recivedfund[0].fundName }}</span></p>        -->
        </div>
        <div class="addtional-attribute">
            <div class="honor-checkbox">
                 <span>In Honor of:</span>
                <p> <input type="text" placeholder="Name" v-model="honorName"></p>
            </div>
            <div class="honor-checkbox">
            <!-- <input type="checkbox">  -->
            <span>In Memory of:</span>
            <p><input type="text" placeholder="Name" v-model="memoryName"></p>
            </div>
            <div class="honor-checkbox">
           <!-- <input type="checkbox">  -->
           <span>Please notify:</span>
           <p> <input type="text" placeholder="FirstName" v-model="firstName">
            <input type="text" placeholder="LastName" v-model="lastName"></p>
            </div>
            <p>{{captureState}}</p>
            <p>{{radioOption}}</p>

        </div>
    </div>
</template>
<script>
import SectionHeading from '../../components/SectionHeading.vue'
export default {
    data(){
        return{
            sectionHeading:'Grant Recongnition',
            honorName:'',
            memoryName:'',
            firstName:'',
            lastName:'',
            checked:'',
        }
    },
    components:{
       SectionHeading 
    },
    computed:{
       recivedfund(){
           return this.$store.getters.getData
       },
       captureState(){
           const currentState = {
               honorName : this.honorName,
               memoryName : this.memoryName,
               firstName:   this.firstName,
               lastName  :this.lastName,

           }
          this.$emit('formData',currentState)
           //console.log("capturedData",currentState)
       },
       radioOption(){
           const selectedButton = {
               buttonClicked : this.checked
           }
           this.$emit('radioClicked',selectedButton)
           //console.log("capturedData",selectedButton)
       }
   },
   created(){
     // console.log("recivedfund", this.$store.getters.getData)
   },
   methods:{
       
   }, 
}
</script>
<style scoped lang="scss">
.recon-heading,.fund-name{
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #022737;
}
.fund-name{
  font-family: HelveticaNeue-bold;
  font-size: 16px;
  color: #022737;
}
.grant-recong{
    
    border-bottom: 1px solid #505050;
    margin-bottom: 30px;
}
.recon-options{
    padding-top: 40px;
    p{
        padding-bottom: 40px;
    }
    input{
        margin-right: 10px;
    }
.radio-content{
    font-family: HelveticaNeue;
    font-size: 16px;
    color: #505050;
}
}
.addtional-attribute{
    input[type = 'text']{
        width: 228px;
        height: 40px;
        border: solid 1px #d4d4d4;
        background-color: #ffffff;
        padding-left: 10px; 
    }
.honor-checkbox{
        padding-bottom: 40px;
    }
    span{
        padding-bottom: 10px;
        display: inline-block;
    }
}
</style>