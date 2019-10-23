<template>
    <header>
        <div class="top-bar clearfix">
           <div class="top-bar-wrapper">
            <a href="">Need Assistance?</a>
            <img src="../assets/messages.svg" alt="email-logo">
            <img class = "log-out" src="../assets/profile-2.svg" alt="logout-logo">
           </div>               
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
header{
    background-color: #022737;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.top-bar{
    padding: 12px 0px;
    max-width: 1240px;
    margin: 0 auto;
    a{
    font-family: HelveticaNeue;
    font-size: 12px;
    color: #ffffff;
    text-decoration: none;
    }
    img{
        cursor: pointer;
    }
    .log-out{
        width: 20px;
        height: 20px;
    }
    .top-bar-wrapper{
        float: right;
        display: flex;
        justify-content: space-around;
        width: 35%;
        align-items: center;
    }
}
</style>