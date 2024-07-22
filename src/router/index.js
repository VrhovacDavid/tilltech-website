import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Blog from '../pages/Blog.vue'
import Services from '../pages/Services.vue'
import CaseStudy from '../pages/casestudy/CaseStudy.vue'
import Portfolio from '../pages/Portfolio.vue'
import BlogPost from '../pages/BlogPost.vue'
import BioLinks from '../pages/BioLinks.vue'
import NotFound from '../pages/NotFound.vue'







const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:notFound',
      name: '404',
      component: NotFound
    },
    {
      path: '/blog/',
      name: 'Blog',
      component: Blog
    },
  
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/casestudy/:slug',
      name: 'CaseStudy',
      component: CaseStudy
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/blogpost/:id',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/links',
      name: 'BioLinks',
      component: BioLinks
    },


   
  ],


})


export default router
