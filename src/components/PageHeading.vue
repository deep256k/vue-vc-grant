<template>
<div class="page-heading max-width-container">
<p>{{pageHeading}}</p>
</div>   
</template>
<script>
export default {
    props:{
        pageHeading: String,
    }
}
</script>
<style scoped lang= "scss">
.page-heading{
    padding-bottom: 30px;
p{
    font-family: BerkeleyStd;;
     font-size: 42px;
     color:#022737;
     margin: 0px;
}
}
</style>