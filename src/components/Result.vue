<template>
  <div>
      <h1>{{ this.reponse.result.prediction}}</h1>
      <v-icon large>mdi-bicycle</v-icon>
            <v-btn
            @click="restart"
            >
              Nouvelle prédiction
            </v-btn>
  </div>
</template>

<script>
export default {
    name: "Result",
    props: {
        reponse: {
            type: Object,
            required: true
        }
    },
    methods: {
        restart: function () {
            this.$emit('restart');
        }
    }
}
</script>

<style>

</style>