<template>
    <div class="grant-contact">
       <section-heading :section-heading = "sectionHeading"></section-heading>
       <p class="enter-note">Enter contact details of the grantee organization.</p>
<form>
 <div class="user-name">   
    <div>
    <p>First name*</p>
    <input type="text" 
    v-model = "advisorFirstName"
    @blur="$v.advisorFirstName.$touch()">
    <p class = "alert" v-if="$v.advisorFirstName.$error">Please enter atleast 3 character</p>
</div>

<div>
  <p>Last name*</p>
  <input type="text" 
  v-model = "advisorLastName"
   @blur="$v.advisorLastName.$touch()">
  <p class = "alert" v-if="$v.advisorLastName.$error">Please enter atleast 2 character</p>
</div>
 </div>
 <div class="user-details">   
    <div>
    <p>Email Address*</p>
    <input type="text" 
    @blur = "$v.advisorEmail.$touch()"
    v-model = "advisorEmail">
    <p class = "alert" v-if = "$v.advisorEmail.$error">Please enter a valid email-id</p>
    <!-- <p v-if = "!$v.advisorEmail.required">this fileld is required</p> -->
</div>
<!-- <p>{{$v}}</p> -->
<div>
  <p>Phone Number (Optional)</p>
  <input type="number" v-model = "advisorContact">
</div>
 </div>    
 <p>{{saveData}}</p>
</form>
    </div>
</template>
<script>
import SectionHeading from '../../components/SectionHeading.vue'
import {required,email,minLength} from 'vuelidate/lib/validators'
export default {
    components:{
        SectionHeading
    },
    data(){
        return{
            sectionHeading:"Grantee Organization Contact",
            advisorFirstName:'',
            advisorLastName:'',
            advisorContact:'',
            advisorEmail:''

        }
    },
    computed:{
        saveData() {
            const currentData = {
            advisorFirstName : this.advisorFirstName,
            advisorLastName : this.advisorLastName,
            advisorContact: this.advisorContact,
            advisorEmail : this.advisorEmail,
        }
            this.$emit('advisorData',currentData)
            console.log("capturedData",currentData)
        }
    },
    validations:{
        advisorEmail:{
            required,
            email
        },
        advisorFirstName:{
        minLength: minLength(3)
        },
        advisorLastName:{
        minLength: minLength(2) 
        }
    }
}
</script>
<style scoped lang= "scss">
.grant-contact{
padding-bottom: 50px;
border-bottom: 1px solid #505050;
}
.user-name,.user-details{
    display: flex;
    justify-content: space-between;
    width: 60%;
}
.grantee-heading{
    font-family: BerkeleyStd;
    font-size: 24px;
    color: #022737;
}
.enter-note{
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #505050;
  padding: 15px 0px 30px 0px;
}
p{
    margin: 0px;
}
.user-details{
    padding-top: 30px;
}
form{
    p{
    font-family: HelveticaNeue;
    font-size: 16px;
    color: #505050;
    }
    input{
        width: 300px;
        height: 40px;
        outline: none;
    }
}
.alert{
    color: red;
    font-family: HelveticaNeue;
    font-size: 16px;
    padding :10px 0px 0px 0px;
}
</style>
