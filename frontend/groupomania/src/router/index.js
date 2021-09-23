import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Forum from '../views/Forum';
import CreatePost from '../views/CreatePost';
import PostById from '../views/PostById';
import Account from '../views/Account';
import EditProfil from '../views/EditProfil';
import SignUp from '../views/SignUp';
import SignIn from '../views/SignIn';
import ForgotPassword from '../views/ForgotPassword';


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
    path: "/postId",
    name: "postId",
    component: PostById
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
