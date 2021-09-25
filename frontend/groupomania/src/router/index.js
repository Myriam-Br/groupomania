import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '../views/Test';
import Forum from '../views/Forum';
import CreatePost from '../views/CreatePost';
import PostById from '../views/PostById';
import Account from '../views/Account';
import EditProfil from '../views/EditProfil';
import SignUp from '../views/SignUp';
import SignIn from '../views/SignIn';




Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    name: "forum",
    component: Forum
  },
  {
    path: "/test",
    name: "test",
    component: Test
  },
  {
    path: "/createpost",
    name: "createpost",
    component: CreatePost
  },
  {
    path: "/publication_by_id",
    name: "publication_by_id",
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;
