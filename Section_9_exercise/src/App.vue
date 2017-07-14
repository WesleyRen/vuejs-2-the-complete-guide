<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click=loadBlue>Load Blue Template</button>
                <button class="btn btn-success" @click=loadGreen>Load Green Template</button>
                <button class="btn btn-danger" @click=loadRed>Load Red Template</button>
                <hr>
                <component :is="selectedComponent"><p>Let's rock!!!</p></component>
                <!--
                <app-blue><p>Let's rock!!!</p></app-blue>
                <app-green><p>Let's rock!!!</p></app-green>
                <app-red><p>Let's rock!!!</p></app-red>
              -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data: function() {
        return {
          selectedComponent: "appBlue"
        }
      },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
          loadBlue() {this.selectedComponent = "appBlue";},
          loadGreen() {this.selectedComponent = "appGreen";},
          loadRed() {this.selectedComponent = "appRed";}
        }
    }
</script>

<style>
</style>
