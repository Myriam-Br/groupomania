import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Forum from '../views/Forum.vue';
import CreatePost from '../views/CreatePost.vue';
import Account from '../views/Account.vue';
import EditProfil from '../views/EditProfil.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/forum",
    name: "forum",
    component: Forum
  },
  {
    path: "/createpost",
    name: "createpost",
    component: CreatePost
  },
  {
    path: "/account",
    name: "account",
    component: Account
  },
  {
    path: "/editprofil",
    name: "editprofil",
    component: EditProfil
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: ForgotPassword
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;
