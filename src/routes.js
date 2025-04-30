import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import NewPassword from "./components/NewPassword.vue";
import HomePage from "./components/HomePage.vue";
import ForgetPassword from "./components/ForgetPassword.vue";
import ConfirmationWindow from "./components/ConfirmationWindow.vue";
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/sign-in'
    },
    {
        name: 'NewPassword',
        component: NewPassword,
        path: '/new-password'
    },
    {
        name:'ForgetPassword',
        component: ForgetPassword,
        path: '/forget-password'
    },
    {
        name:'ConfirmationWindow',
        component: ConfirmationWindow,
        path: '/confirmation-window'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router