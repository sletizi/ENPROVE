import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    src_lang: 'en',
    row_number: 0
  },
  mutations: {
    swap_lang (state, lang) {
      state.src_lang = lang
    }
  },
  actions: {
    swap_lang (context, lang) {
      context.commit('swap_lang', lang)
    }
  },
  getters: {
    getSourceLang(state){
      return state.src_lang;
    }
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
  store: store
}).$mount('#app')
