<template>
    <div class="purpose-details">
        <section-heading :section-heading = "sectionHeading"></section-heading>
        <p class="indicate-purpose">Indicate the purpose of this grant.</p>
        <div class="purpose-options">
            <select id="purpose" v-model="selectedOptions" @change ="optionSelected">
                <option v-for="option in purposeOptions" :key="option.id" >{{option}}</option>
  </select>
        </div>
        <button class="add-items" @click = "commentBox">Add Additional Comments +</button>
        <div class="additional-info" v-if="showComment">
            <p>Additional Comments:</p>
        <textarea name="message" rows="30" cols="10">Lorem ipsum dolor sit amet</textarea>
    </div>
    <!-- <div class="confirmation">
        <h6>Please confirm that:</h6>
        <p>1. You do not expect to receive any cash, goods or services in exchange for this grant.<p>
        <p>2. This grant will not support the tax-deductible portion of test data on 17 Feb 2017.</p>
        <input type="checkbox" v-model="checked" @change = "inputChecked"> By selecting this box you certify on
         behalf of all authorized parties on this account
                            that the information above is correct.
       <p>output is {{checked}}</p>                     
    </div> -->
    </div>
</template>
<script>
import SectionHeading from '../../components/SectionHeading.vue'
import {eventBus}  from '../../main'
export default {
    components:{
        SectionHeading
    },
    data(){
        return{
            sectionHeading:"Grant Purpose",
            showComment:false,
            purposeOptions:["Select a Purpose","General Operating Expenses","Annual Fund","Capital Campaign","Capital Expenditure"],
            selectedOptions:"Select a Purpose",
            checked: false,
            }
    },  
    methods:{
        commentBox() {
                this.showComment = !this.showComment
                
    },
    optionSelected(){
           this.$store.dispatch('commitedOption',this.selectedOptions);

    },
    inputChecked(){
        this.$emit('checkClicked', this.checked)
    }
},
    
}
</script>

<style lang="scss">
.purpose-details{
padding-bottom: 50px;
border-bottom: 1px solid #505050;
}
.indicate-purpose{
    font-family: HelveticaNeue;
    font-size: 16px;
    color: #505050;
    padding: 15px 0px 30px 0px;
}
.purpose-options 
{
    display: inline-block;
 select{
    width: 300px;
    height: 40px;
    border: solid 1px #d4d4d4;
    background-color: #ffffff;
 
}
}
.add-items{
    font-family: HelveticaNeue;
    font-size: 14px;
    color: #006778;
    width: 231px;
    height: 30px;
    border-radius: 18px;
    border: solid 1px #d4d4d4;
    background-color: #f5f5f5;
    margin-left: 30px;
}
.add-items:focus{
    outline: none;
}
.additional-info 
{
textarea{
    height: 124px;
    border: solid 1px #d4d4d4;
    background-color: #ffffff;
    width: 50%;
    outline: none;
}
p{
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #505050;
  padding: 40px 0px 10px 0px;
  margin: 0px;
}
}
.confirmation{
    padding-top: 30px;
    h6{
     font-family: HelveticaNeue;
     font-size: 16px;
     color: #022737;
    }
 p{
     margin: 0px;
     font-family: HelveticaNeue;
    font-size: 16px;
    color: #505050;

 }
 input{
     margin-top: 20px;
 }   
}
</style>