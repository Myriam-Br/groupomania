import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./axios"
import Dayjs from 'vue-dayjs'


Vue.use(Dayjs, {
  //language set default
  lang: 'en',

  /**
   * addon filters { key: filter name }
   */
  filters: {
    ago: 'ago',
  },
  /**
   * addon directives { key: directives name}
   * set {} to disable.
   */
  directives: {
    countdown: 'countdown',
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
