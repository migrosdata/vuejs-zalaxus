<template>
  <div>
    <v-img
        :src="require('../assets/cup.png')"
        height="400"
        contain
    />
    <h1>{{ this.reponse.result.prediction}}</h1>
    <div>probaPercentile {{ this.reponse.result.probaPercentile}}</div>
    <v-btn
        @click="restart"
    >
        Nouvelle prédiction
        <v-icon large>mdi-bicycle</v-icon>
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