import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../components/HomePage.vue'
import NewAccount from '../components/LoginPages/NewAccount.vue'
import AccountConfirmation from '../components/LoginPages/AccountConfirmation.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/newaccount',
      name: 'NewAccount',
      component: NewAccount
    },
    {
      path: '/accountConfirmation',
      name: 'AccountConfirmation',
      component: AccountConfirmation
    }
  ]
})

export default router
