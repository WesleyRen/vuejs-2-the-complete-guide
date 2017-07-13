<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>
          My name is {{ name }}
        </p>
        <p>User age: {{ age }} (user component is not listening to event, so won't change.)</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
              <!-- !!! passing properties from parent to child -->
                <app-user-detail :myName="name" :age="age"
                @nameWasReset="name = $event"
                :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
      data: function() {
        return {
          name: 'Wes',
          age: 30
        };
      },
      methods: {
        changeName() {
          this.name = 'Whowho';
        },
        resetName() {
          this.name = 'Default Name';
        }
      },

      components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
