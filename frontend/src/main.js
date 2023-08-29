import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueApollo);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        libraries: 'geometry',
    },
});
Vue.config.productionTip = false

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql', // Backend GraphQL endpoint
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
    el: '#app',
    apolloProvider,
});
