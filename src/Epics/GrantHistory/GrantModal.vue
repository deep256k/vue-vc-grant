<template>
   <div>
  <b-modal id="modal-1" title="Selected Charity Details">
      <!-- <p class="selected-content">{{getCharityinfo[0].name}}</p> -->
   <div class = "charity-details">
       <div class="left-details">
           <span class="modal-heading">Legal Name:</span>
           <span class="modal-contents">{{launchData.name}}</span>
       </div>
       <div class="right-details">
           <span class="modal-heading">EIN:</span>
           <span class="modal-contents">{{launchData.EIN}}</span>
       </div>
    </div> 
     <div class = "charity-details extra-margin">
       <div class="left-details">
           <span class="modal-heading">Address:</span>
           <span class="modal-contents">{{launchData.Address}}</span>
       </div>
       <div class="right-details">
           <span class="modal-heading">Last Grant:</span>
           <span class="modal-contents">{{launchData.lastGrant}}</span>
       </div>
    </div>
    <slot></slot> 
  </b-modal>
</div>
</template>
<script>
export default {
    computed:{
        getCharityinfo(){
            return this.$store.getters.getcharityInformationData
        },
    },
    created(){
        //console.log("modal data",this.$store.getters.getcharityInformationData)
    },
    props:['launchData']
}
</script>
<style lang = "scss">
.modal-footer,.modal-header{
    border: none;
}
.modal-footer{
    padding: 0px;
}
.modal-content{
    width:800px;
    height: auto;
}
.btn-secondary, .btn-primary{
     display: none;
}
.charity-details{
    display: flex;

  .left-details,.right-details{
      width: 50%
  }  
}
.extra-margin{
    margin-bottom: 50px;
    padding-top: 30px;
}
.modal-heading{
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #505050;
}
.modal-contents{
 font-family: HelveticaNeue-Bold;
  font-size: 16px;
  color:#022737;
}
</style>