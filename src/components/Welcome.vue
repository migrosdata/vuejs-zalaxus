<template>
  <base-card>
    <v-img
      :src="require('../assets/rider.jpg')"
      class="grey lighten-2"
        height="100%"
      width="100%"
      position="top"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h1 class="display-3 font-weight-light">
            Zalaxus ML
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            {{$t('welcomeMessage')}}
          </div>

          <v-btn
            color="primary"
            depressed
            to="/home"
          >
            {{$t('predictButton')}}
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'Welcome',
  }
</script>
