<template>
    <div>
        <table>
  <tr>
    <th v-for = "heading in tableHeading" :key="heading.ids">{{heading}}</th>
  </tr>
  <tr v-for="(data,i) in tableData" :key= data.id>
    <td>{{data.legalName}}</td>
    <td>{{data.EIN}}</td>
    <td>{{data.Address}}</td>
    <td>{{data.lastGrant}}</td>
    <td>{{data.interestArea}}</td>
    <td><button v-b-modal.modal-1 class="selct-button" @click="navigateToPurpose(i)">select</button></td>
  </tr>
</table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableHeading : ["Legal Name","EIN","Address","Last Grant","Interest Area"]
        }
    },
    props:{
      tableData:Array,
      openModal : Boolean
      },
    methods:{
      navigateToPurpose(i){
        //this.$router.push({name:'GrantPurpose'})
        const selecteddata = {
            name: this.tableData[i].legalName,
            EIN : this.tableData[i].EIN,
            Address: this.tableData[i].Address,
            lastGrant:this.tableData[i].lastGrant,
            interestArea:this.tableData[i].interestArea,

        }
       // console.log("selected data is",selecteddata)
        this.$store.dispatch("commitcharityInformationData",selecteddata)
        this.$emit("launch-modal",selecteddata)
        this.openModal = true;
        console.log('modal is',this.openModal)
        this.$emit('modalStatus',this.openModal)

      }
    }
}
</script>
<style scoped lang= "scss">
table {
  font-family: arial, sans-serif;
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
.selct-button{
  margin-left: 40px;
  width: 95px;
  height: 30px;
  border-radius: 18px;
  border: solid 1px #d4d4d4;
  background-color: #ffffff;
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #006778;
}
.selct-button:focus{
  outline: none;
}
.selct-button:hover{
   background: #006778;
   color: #ffffff;
}
</style>