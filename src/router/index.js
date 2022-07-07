import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../components/HomePage.vue'
import NewAccount from '../components/LoginPages/NewAccount.vue'
import AccountConfirmation from '../components/LoginPages/AccountConfirmation.vue'
import MembersPage from '../components/MembersPage.vue'
import DetailsPage from '../components/DetailsPage.vue'
import ErrorPage from '../components/ErrorPage.vue'
import ContactUs from '../components/ContactUs.vue'
import MyProfile from '../components/MyProfile.vue'
import ProfileInformation from '../components/ProfileInformation.vue'
import RateUs from '../components/RateUs.vue'
import Payment from '../components/Payment.vue'
import Notifications from '../components/Notifications.vue'
import InteractiveNotifications from '../components/InteractiveNotifications.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
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
        },
        {
            path: '/membersPage',
            name: 'MembersPage',
            component: MembersPage
        },
        {
            path: '/detailsPage',
            name: 'DetailsPage',
            component: DetailsPage
        },
        {
            path: '/errorPage',
            name: 'ErrorPage',
            component: ErrorPage
        },
        {
            path: '/ContactUs',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '/myProfile',
            name: 'MyProfile',
            component: MyProfile
        },
        {
            path: '/ProfileInformation',
            name: 'ProfileInformation',
            component: ProfileInformation
        },
        {
            path: '/RateUs',
            name: 'RateUs',
            component: RateUs
        },
        {
            path: '/Payment',
            name: 'Payment',
            component: Payment
        },
        {
            path: '/Notifications',
            name: 'Notifications',
            component: Notifications
        },
        {
            path: '/InteractiveNotifications',
            name: 'InteractiveNotifications',
            component: InteractiveNotifications
        },
    ]
})

export default router