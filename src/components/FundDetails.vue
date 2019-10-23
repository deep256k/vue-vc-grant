<template>
    <div class="fund-details max-width-container">
        <div class="fund-details-wrapper">
      <div class="selected--fund">
          <p>{{fundDetails.fundName}}</p>
          <span>{{fundDetails.accountId}}</span>
      </div>
      <div class="current-balance">
          <p>Available Balance</p>
          <span>{{fundDetails.currentBalance}}</span>
      </div>
      <div class="available-balance">
          <p>Current Balance</p>
          <span>{{fundDetails.availableBalance}}</span>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        fundDetails : Object,
    }
    
}
</script>

<style scoped lang= "scss">
.fund-details-wrapper{
    display: flex;
    justify-content: space-between;
    width: 45%;
    padding-bottom: 30px;
p{
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #505050;
  margin: 0px;
  padding-bottom: 5px;  
}
span{
    font-family: HelveticaNeue-bold;
    font-size: 16px;
    color: #505050; 
}
.selected--fund,.current-balance{
    border-right: 1px solid;
    padding-right: 50px;
}
}
</style>