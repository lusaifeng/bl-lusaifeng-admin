import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/Login'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Nav2 from '../components/Nav2'
import Side1 from '../components/Side1'
import Side2 from '../components/Side2'
import Side3 from '../components/Side3'
import Side4 from '../components/Side4'
import Side5 from '../components/Side5'
import Side6 from '../components/Side6'

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          component: Main,
          redirect: '/main/side1',
          children: [
            {
              path: '/main/side1',
              component: Side1,
              meta: {side1: 'side1'}
            },
            {
              path: '/main/side2',
              component: Side2,
              name: 'side2',
              meta: {side2: 'side2'}
            },
            {
              path: '/main/side3',
              component: Side3
            },
            {
              path: '/main/side4',
              component: Side4
            }
          ]
        },
        {
          path: '/nav/side5',
          component: Nav2,
          children: [
            {
              path: '/nav/side5',
              component: Side5
            },
            {
              path: '/nav/side6',
              component: Side6
            }
          ]
        }
        
      ]
    }
  ]
})

export default router