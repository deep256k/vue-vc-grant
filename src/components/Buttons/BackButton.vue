<template>
    <button class="back-button" @click="$emit('back-step')">{{buttonInput}}</button>
</template>
<script>
export default {
    props:{
        buttonInput:String
    }
}
</script>
<style scoped>
.back-button{
  width: 150px;
  height: 50px;
  border: solid 1px #006778;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #006778;
  margin-right: 30px;
}
.back-button:focus{
    outline: none;
}
</style>