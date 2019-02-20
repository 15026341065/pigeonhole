import Vue from 'vue'
import Router from 'vue-router'
import Home from '../iview/home/index.vue'
import News from '../iview/news/index.vue'
import LeaveWord from '../iview/leave_word/index.vue'
import Contact from '../iview/contact/index.vue'
import About from '../iview/about/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
		{path: '/Home',component: Home},
		{path: '/News',component: News},
		{path: '/LeaveWord',component: LeaveWord},
		{path: '/Contact',component: Contact},
		{path: '/About',component: About}
  ]
})
