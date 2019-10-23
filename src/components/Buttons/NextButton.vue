<template>
    <button class="next-button" @click="$emit('next-step')">{{buttonInput}}</button>
</template>
<script>
export default {
    props:{
        buttonInput:String
    }
}
</script>
<style scoped>
.next-button{
  width: 150px;
  height: 50px;
  background-color: #006778;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #ffffff;
  float: right;
}
.next-button:focus{
      outline: none;
  }

</style>