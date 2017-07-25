<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>Username</label>
                  <input class="form-control" type="text" v-model="user.name"/>
                </div>
                <div class="form-group">
                  <label>Mail</label>
                  <input class="form-control" type="text" v-model="user.email"/>
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
            </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <label for="input">type in 'data' or 'alternative', which we sent to Firebase earlier.</label>
            <input class="form-control" type="text" v-model="node" />
            <button class="btn btn-primary" @click="fetchData">Get data</button>
            <ul class="list-group">
              <li class="list-group-item" v-for="u in users">{{ u.name }} , {{ u.email }}</li>
            </ul>
          </div>

        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {name: '', email: ''},
          users: [],
          resource: {},
          node: 'data'
        };
      },
      methods: {
        submit() {
          // console.log(this.user.name + ' ' + this.user.email);
          // this.$http.post('', this.user)
          //   .then(response => {
          //     console.log(response);
          //   }, error => {
          //     console.log(error);
          //   });
          // this.resource.save({}, this.user); // default action.
          this.resource.saveAlt(this.user); // customized action.
        },
        fetchData() {
          // this.$http.get('')
          //   .then(response => {
          //     return response.json();
          //   })
          //   .then(data => {
          //     console.log(data);
          //     this.users = [];
          //     for (let key in data) {
          //       this.users.push(data[key]);
          //     }
          //   });
          this.resource.getData({node: this.node})
            .then(response => {
              return response.json();
            })
            .then(data => {
              console.log(data);
              this.users = [];
              for (let key in data) {
                this.users.push(data[key]);
              }
            });
        }
      },
      created() {
        const customActions = {
          saveAlt: {method: 'POST', url: 'alternative.json'},
          getData: {method: 'GET'}
        };
        this.resource = this.$resource('{node}.json', {}, customActions);
      }
    }
</script>

<style>
</style>
