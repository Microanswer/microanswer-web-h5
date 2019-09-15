import Vue           from 'vue'
import App           from './App.vue'
import router        from './routers/router'
import store         from './stores/stores'
import componentList from './componentList'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;
Vue.use(componentList);

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app');
