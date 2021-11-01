<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="270"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Zalaxus AI App
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <zalaxus-form v-if="showForm" v-on:submit="submitHandler"></zalaxus-form>
        <error v-if="showError"></error>
        <result v-if="showResult"></result>
        <spinner v-if="showSpinner"></spinner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Error from "./Error.vue";
  import Result from "./Result.vue";
  import Spinner from "./Spinner.vue";
  import ZalaxusForm from "./Form.vue";
  export default {
    name: 'Home',
    components: {
      Error,
      Spinner,
      Result,
      ZalaxusForm,      
    },
    data: () => ({
      showError: false,
      showForm: true,
      showResult: false,
      showSpinner: false,
    }),
    methods: {
      submitHandler() {
        this.showForm = false;
        this.showSpinner = true;
        this.axios.post('https://dataiku.hes-so.ch:8080/public/api/v1/cheapflixani/movies/lookup', { 
            "data" : {
            }
          }).then((response) => {
            console.log(response.data)
            this.showSpinner = true;            

          }).catch(error => {
            this.showError = true;
            console.log(error);
          });
      }
    }
  }
</script>
