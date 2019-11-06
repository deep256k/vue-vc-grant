<template>
<div class="steppers-container">
    <div class="steppers top-margin">
        <p class ="stepper-heading">Step1</p>
        <p class="stepper-content">Charity, Purpose and Recognition</p>
    </div>
     <div class="steppers stepper-margin">
        <p class ="stepper-heading">Step2</p>
        <p class="stepper-content">Grant Allocation and Schedule</p>
    </div>
     <div class="steppers third-step">
        <p class ="stepper-heading">Step3</p>
        <p class="stepper-content">Review Grant and Submit</p>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.steppers{
     width: 174px;
    height: 145px;
     border: solid 1px #dcdcdc;
    background-color: #ffffff;
    padding: 20px;
    border-left: 7px solid #dcdcdc;
    cursor: pointer;
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.1);
}
.steppers-container{
    margin-right: 30px;
}
.stepper-heading{
    font-family: HelveticaNeue-Bold;
    font-size: 16px;
    color: #006778;
}
.stepper-content{
    font-family: BerkeleyStd;
    font-size: 16px;
    color: #727272;
    padding-top: 25px;
}
.stepper-margin{
    margin: 10px 0px;
}
.top-margin{
    margin-top: 38px;
    border-left: 7px solid #006778
}
</style>