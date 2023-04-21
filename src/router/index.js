import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Blog from '@/components/blog'
import About from '@/components/about'
import Contact from '@/components/contact'
import Gallery from '@/components/gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    }
  ]
})
