import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue';
import accueil from '../views/index.vue';
import contact from '../views/contact.vue';
import boutique from '../views/boutique.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/contact.vue')
    },
    {
      path: '/accueil',
      name: 'accueil',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/index.vue')
    },
    {
      path: '/boutique',
      name: 'boutique',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/boutique.vue')
    },
    {
      path: '/qui-sommes-nous',
      name: 'qui-sommes-nous',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/qsm.vue')
    },
    {
      path: '/mentions',
      name: 'mentions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mentions.vue')
    },
    {
      path: '/panier',
      name: 'paniers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/panier.vue')
    }
    ,
    {
      path: '/produit',
      name: 'produits',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/produit.vue')
    }
  ]
})

export default router
