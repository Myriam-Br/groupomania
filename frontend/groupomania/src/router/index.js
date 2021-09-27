import Vue from 'vue';
import VueRouter from 'vue-router';
import Forum from '../views/Forum';
import CreatePost from '../views/CreatePost';
import PostById from '../views/PostById';
import Account from '../views/Account';
import DeleteAccount from '../views/DeleteAccount';
import SignUp from '../views/SignUp';

import SignIn from '../views/SignIn';
import ConfirmDelete from '../views/DeleteAccountConfirm';




Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    name: "forum",
    component: Forum
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
    path: "/deleteaccount",
    name: "deleteaccount",
    component: DeleteAccount
  },
  {
    path: "/delete_account_confirmation",
    name: "deleteconfirmation",
    component: ConfirmDelete
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
