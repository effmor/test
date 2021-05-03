import Vue from 'vue';
import App from '~/App';

(async () => {
    new Vue({
        el: '#app',
        render: h => h(App) 
    })
})();