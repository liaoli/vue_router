import Vue from "vue";
import Find from '../views/Find'
import My from '../views/My'
import Friend from '../views/Friend'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/find',component:Find},
        {path:'/my',component:My},
        {path:'/friend',component:Friend},
    ],
    linkActiveClass:'active',
    linkExactActiveClass:'exactActive',
})

export default router