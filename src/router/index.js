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
    ]
})

export default router