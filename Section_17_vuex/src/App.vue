<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <app-global-value></app-global-value>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <input type="text" v-model="value" />
                <p> {{ value }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import GlobalValue from './components/GlobalValue.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        data() {
            return {
                counter: 0
            }
        },
        computed: {
          value: {
            get() {
              return this.$store.getters['value/getValue'];
            },
            set(value) {
              this.$store.dispatch('value/updateValue', value);
            }
          }
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appGlobalValue: GlobalValue
        }
    }
</script>
