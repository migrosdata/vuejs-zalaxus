<template>
  <div>
    <div v-if="this.reponse.result.prediction == 1">
        <v-img
            :src="require('../assets/cup.png')"
            height="400"
            contain
        />
    </div>
    <div v-else>
        <v-img
            :src="require('../assets/fail.png')"
            height="400"
            contain
        />
    </div>

    <div>{{ this.reponse.result.probaPercentile}} % </div>

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