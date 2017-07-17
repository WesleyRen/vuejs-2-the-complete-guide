<template>
    <div class="container">
      <div v-if="!isSubmitted">
        <div class="row" >
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Sign Up Page</h1>
          </div>
        </div>
        <hr>

        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                      <full-name-input v-model="userData.fullName"></full-name-input>
                    </div>

                    <div class="form-group">
                      <label for="email">Mail</label>
                      <input
                        type="text"
                        id="email"
                        class="form-control"
                        :value="userData.email"
                        @input="userData.email = $event.target.value"/>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="text"
                        id="password"
                        class="form-control"
                        v-model.lazy="userData.password"/>
                    </div>

                    <hr />

                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                          <label for="storeInDatabase">
                            <input
                              type="checkbox"
                              id="storeInDatabase"
                              v-model="storeInDatabase">Store In Database
                          </label>
                        </div>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <hr />
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                          <button class="btn btn-primary"
                            @click.prevent="submit">Submit
                          </button>
                        </div>
                    </div>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr />
      </div>
      <div class="row" v-else>
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h4>Your Data</h4>
                  </div>
                  <div class="panel-body">
                      <p>Full Name: {{ userData.fullName.firstName }} {{ userData.fullName.lastName }}</p>
                      <p>Mail: {{ userData.email }}</p>
                      <p>Password: {{ userData.password }}</p>
                      <p>Store in Database?: {{ storeInDatabase }}</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
    import FullNameInput from './FullNameInput.vue';

    export default {
      data() {
        return {
          userData: {
            fullName: {firstName: '', lastName: ''},
            email: '',
            password: '',
          },
          storeInDatabase: true,
          isSubmitted: false
        };
      },
      components: {
        FullNameInput
      },
      methods: {
        submit() {
          this.isSubmitted = true;
        }
      }
    }
</script>

<style>
</style>
