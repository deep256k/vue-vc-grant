import Home from '../src/components/Home.vue'
import Grant from '../src/Epics/Index.vue'
import GrantHistory from '../src/Epics/GrantHistory/GrantHistory.vue'
import Purpose from '../src//Epics/GrantPurpose/GrantPurpose.vue'
import GrantAllocation from "../src/Epics/GrantAllocation/GrantAllocation.vue"
import GrantReview from "../src//Epics/GrantReview/GrantReview.vue"

export const routes = [
    {path:'',component:Home,name:'Home'},
    {path:'/grant',component:Grant,name:'Grant',children:[
        {path: '', component: GrantHistory,name:'GrantHistory'},
        {path:'step1',component:Purpose,name:'GrantPurpose'},
        {path:'step2',component:GrantAllocation,name:'GrantAllocation'},
        {path:'step3',component:GrantReview,name:"GrantReview"}
    ]}
]

export const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    position.x = 100
    position.y = 0
  }
  return position
}