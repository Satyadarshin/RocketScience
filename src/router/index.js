import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Authors from '../views/Authors.vue';
import Awards from '../views/Awards.vue';
import Masterworks from '../views/Masterworks.vue';
import Spotlight from '../components/AuthorSpotlight';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors,
    children: [
      {
        path: ':authorName',
        component: Spotlight,
        props: true,
      },
    ]
  },
  {
    path: '/awards',
    name: 'Awards',
    component: Awards,
  },
  {
    path: '/masterworks',
    name: 'Masterworks',
    component: Masterworks,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
