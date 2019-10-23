<template>
<div class="section-heading max-width-container">
    <p>{{sectionHeading}}</p>
</div>   
</template>
<script>
export default {
    props:{
        sectionHeading: String,
    }
}
</script>
<style scoped>
.section-heading p {
     font-family: BerkeleyStd;
     font-size: 24px;
     color: #022737;
     margin: 0px;
     padding-top: 30px;
}

</style>