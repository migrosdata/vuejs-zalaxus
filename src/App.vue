<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  mounted() {
    this.axios.post('https://dataiku.hes-so.ch:8080/public/api/v1/cheapflixani/movies/lookup',
    { "data" : {
    
    }}).then((response) => {
      console.log(response.data)
    });
  }
};
</script>
