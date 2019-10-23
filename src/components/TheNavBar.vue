<template>
    <nav>
        <div class="nav-bar">
            <div class="left-image">
                <img src="../assets/vcep-logo.jpg" alt="vc-logo">
            </div>
            <div class="right-section">
                <ul class="nav nav-pills">
                    <router-link tag= "li" to="/" class="active-grant" active-class="active"><a>Home</a></router-link>
                    <li class="nav-link"><a href="#" >SUMMARY</a></li>
                    <router-link tag= "li" to="/grant" class="active-grant" active-class="active"><a>GRANTS</a></router-link>
                    <li class="nav-link"><a href="#" >CONTRIBUTIONS</a></li>
                    <li class="nav-link"><a href="#" >INVESTMENTS</a></li>
                    <li class="nav-link"><a href="#" >RESOURCES</a></li>
                    <li class="nav-link"><a href="#" >MY ACCOUNT</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
nav{
    padding-bottom:50px;
}
  .nav-bar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1240px;
      margin: 0 auto;
      padding: 10px 0px;
  }
  .right-section {
      width: 75%;
  }
  ul{
      display: flex;
      list-style: none;
      text-decoration: none;
      margin: 0px;
      justify-content: space-between;
      padding-top: 15px;
    a{
        text-decoration: none;
        font-family: HelveticaNeue-bold;
        font-size: 14px;
        color: #022737;
         padding-bottom: 10px;
    }
    a:hover{
        border-bottom: 3px solid #006778;

    }
.router-link-exact-active{
    border-bottom: 3px solid #006778;
}
    .active-grant{
        padding-top: 8px;
    } 
  }
</style>