import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      component:()=>import('../views/Main.vue'),
      children:[
        {
          path:'/',
         redirect:'home'
        },
        {
         path:'home',
         name:'home',
         component:()=>import('../views/Home/Home.vue')
       },
       {
        path:'video',
        name:'video',
        component:()=>import('../views/Video/Video.vue')
      },
      {
        path:'user',
        name:'user',
        component:()=>import('../views/User/User.vue')
      },
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
