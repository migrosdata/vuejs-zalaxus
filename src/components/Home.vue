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
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Zalaxus AI App
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
      >
        <transition name="fade">
          <zalaxus-form 
            v-if="showForm" 
            v-on:submit="submitHandler"
            :regions="this.regions"
            :maritalStatuses="this.maritalStatuses"
            :genders="this.genders"
            :englishEducations="this.englishEducations"
            :commuteDistances="this.commuteDistances"
            :religions="this.religions"
          ></zalaxus-form>
          <error v-if="showError"></error>
          <result v-if="showResult" :reponse="dataikuResponse" v-on:restart="restartHandler"></result>
          <spinner v-if="showSpinner"></spinner>
         </transition>
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
      dataikuResponse : null,
      regions: ['North America', 'Europe', 'Pacific'],
      maritalStatuses: ['Single', 'Married'],
      genders: ['F', 'M'],
      englishEducations: ['Partial High School', 'High School', 'Partial College', 'Bachelors', 'Graduate Degree'],
      commuteDistances: ['0-1 Miles', '1-2 Miles', '2-5 Miles', '5-10 Miles', '10+ Miles'],
      religions: ['Protestantism', 'Roman Catholicism', 'No religion'],
    }),
    methods: {
      submitHandler(form) {
        this.showForm = false;
        this.showSpinner = true;
        const features = `{ "features" : ${JSON.stringify(form, null, ' ')} }`;      
        this.axios.post('https://dataiku.hes-so.ch:8080/public/api/v1/zalaxus01/bikebuyingprediction/predict', features).then((response) => {
            this.dataikuResponse = response.data;
            console.log(response.data)
            this.showSpinner = false;
            this.showResult = true;

          }).catch(error => {
            this.showSpinner = false;
            this.showError = true;
            console.log(error);
          });        
      },
      restartHandler() {        
        this.showResult = false;
        this.dataikuResponse = null;
        this.showForm = true;
      },
      loadFormData() {
        const regionsRequest = this.axios.get('https://httpbin.org/get');
        const maritalStatusesRequest = this.axios.get('https://httpbin.org/get');
        const gendersRequest = this.axios.get('https://httpbin.org/get');
        const englishEducationsRequest = this.axios.get('https://httpbin.org/get');
        const commuteDistancesRequest = this.axios.get('https://httpbin.org/get');
        const religionsRequest = this.axios.get('https://httpbin.org/get');

        // you could also use destructuring to have an array of responses
        this.axios.all([regionsRequest, maritalStatusesRequest, gendersRequest, englishEducationsRequest, commuteDistancesRequest, religionsRequest])
        .then(this.axios.spread(function(regionsResults, maritalStatusesResult, gendersResult, englishEducationsResult, commuteDistancesResult, religionsResult) {
          this.regions = regionsResults.data;
          this.maritalStatuses = maritalStatusesResult.data;
          this.genders = gendersResult.data;
          this.englishEducations = englishEducationsResult.data;
          this.commuteDistances = commuteDistancesResult.data;
          this.religions = religionsResult.data;
          this.showForm = true;
        })).catch(error => {
          this.showError = true;
          console.log(error);
        });
      },
    },
    mounted() {
      //this.loadFormData();
    }
  }
</script>
<style>
   .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
   }
   .fade-enter-active, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
   }
</style>