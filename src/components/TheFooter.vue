<template>
    <footer>
        <div class="footer-wrapper">
            <div class="top-footer">
                <div class="top-footer-wrapper max-width-container">
            <div class="left-section">
                <img src="../assets/vanguard-logo.jpg" alt="vc-logo">
                <div class="media-icon">
                    <img src="../assets/messages.svg" alt="email-logo">
                    <img src="../assets/messages.svg" alt="email-logo">
                    <img src="../assets/messages.svg" alt="email-logo">
                    <img src="../assets/messages.svg" alt="email-logo">
                </div>
                <p class="vc-note">© 2018 Vanguard Charitable Endowment Program</p>
            </div>
            <div class="footer-link-first">
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Career Opportunities</a></li>
                    <li><a href="">Legal Disclosure</a></li>
                    <li><a href="">Policies and guidelines</a></li>
                    <li><a href="">User Agreement</a></li>
                </ul>
            </div>
             <div class="footer-link-second">
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Forms</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms and conditions</a></li>
                    <li><a href="">Company Policies</a></li>
                </ul>
            </div>
            <div class="right-section">
                <p>Subscribe to our Newsletter</p>
                <input type="text" class="search-box">
            </div>
    </div>
    </div>
    </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style scoped lang= "scss">
footer{
    padding-top: 50px;
}
.top-footer{
    background-color: #022737;
    padding: 40px 0px;
 .top-footer-wrapper{
     display: flex;
     justify-content: space-between;
 }   
 .media-icon{
     padding-top: 20px;
 }   
}
.left-section{
    width: 22%;
 .media-icon{
     display: flex;
     justify-content: space-between;
 }
 .vc-note{
    opacity: 0.5;
    font-family: HelveticaNeue;
    font-size: 12px;
    color: #ffffff;
    padding-top: 15px;
 }   
}
.footer-link-first,.footer-link-second{
ul{
    list-style: none;
    margin: 0px;
    padding:0px;

li{
    padding-bottom: 15px;
    }
a{
    text-decoration: none;
    font-family: HelveticaNeue;
    font-size: 10px;
    color: #ffffff;
    cursor: pointer;
} 
}
}
.right-section{
    p{
        font-family: HelveticaNeue-bold;
        font-size: 18px;
        color: #ffffff;
        margin: 0px;
        opacity: 0.5;
        padding-bottom: 15px;
    }
    .search-box{
        background-image: url(../assets/group-4.svg);
        background-position: right;
        background-repeat: no-repeat;
        height: 40px;
        width: 100%;
        border: none;
        padding: 0px;
        font-size: 15px;
    }
}

</style>