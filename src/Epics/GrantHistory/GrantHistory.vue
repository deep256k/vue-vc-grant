<template>
    <div>
        <section-heading :section-heading = "sectionHeading"></section-heading>
        <grant-tabs></grant-tabs>
    </div>
</template>
<script>
import GrantTabs from './GrantTabs.vue'
import SectionHeading from '../../components/SectionHeading.vue'
export default {
    components:{
        GrantTabs,
        SectionHeading
    },
    data(){
        return{
            sectionHeading:"Select from Your Charities"
        }
    }
}
</script>
<style scoped>

</style>
