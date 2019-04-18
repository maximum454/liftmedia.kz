import Vue from 'vue'
import App from './App.vue'
import AppNav from './componets/nav';
import AppHeader from './componets/header';
import AppMap from './componets/map';
import AppWhat from './componets/what';
import AppBenefits from './componets/benefits';
import AppTariff from './componets/tariff';

import AppFooter from './componets/footer';

Vue.component('AppNav', AppNav);
Vue.component('AppHeader', AppHeader);
Vue.component('AppMap', AppMap);
Vue.component('AppWhat', AppWhat);
Vue.component('AppBenefits', AppBenefits);
Vue.component('AppTariff', AppTariff);
Vue.component('AppFooter', AppFooter);

new Vue({
  el: '#app',
  render: h => h(App),
});




