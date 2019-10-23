<template>
    <div class="publish-grant">
        <section-heading :section-heading = "sectionHeading"></section-heading>
        <p>Select this box if you want the grant letter to instruct the recipient not to publish any of this grant's information in its newsletters, annual reports, web pages, or other materials. This restriction extends to the names of advisors, the account, or other individuals or organizations you entered.</p>
        <p>If you leave this box unchecked, the recipient organization may publish grant information at its discretion.</p>
        <input type="checkbox"> Please do not publish my name
    </div>
</template>
<script>
import SectionHeading from '../../components/SectionHeading.vue'
export default {
    components:{
        SectionHeading
    },
    data(){
        return{
            sectionHeading:"Permission to Publish",
        }
}
}
</script>
<style scoped lang="scss">
.publish-grant{
    padding-bottom: 50px;
    border-bottom: 1px solid #505050;
    margin-bottom: 30px;
p{
    font-family: HelveticaNeue;
    font-size: 16px;
    color: #505050;
}
}
</style>