<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-calendar"
            v-model.number="form.Age"
            :rules="ageRules"
            label="Age"
            type="number"
            min="0"
            step="1"
            required
          ></v-text-field>          
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-currency-usd"
            v-model.number="form.YearlyIncome"
            :rules="yearlyIncome"
            :label="$t('yearlyIncome')"
            required
            type="number"
            min="0"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-car"
            v-model.number="form.NumberCarsOwned"
            :rules="numberCarsOwned"
            :label="$t('numberCarsOwned')"
            required
            type="number"
            min="0"
          ></v-text-field>
        </v-col>  
      </v-row>
      <v-row>              
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-baby-face"
            v-model.number="form.TotalChildren"
            :rules="totalChildren"
            :label="$t('totalChildren')"
            required
            type="number"
            min="0"
          ></v-text-field>          
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-bed"
            v-model.number="form.NumberChildrenAtHome"
            :rules="numberChildrenAtHome"
            :label="$t('numberChildrenAtHome')"
            required
            type="number"
            min="0"
          ></v-text-field>          
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            prepend-icon="mdi-lock"
            v-model="form.MaritalStatus"
            :items="$t('maritalStatus.items')"
            :rules="[(v) => !!v || 'Marital status is required']"
            :label="$t('maritalStatus.label')"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-select
            prepend-icon="mdi-human"
            v-model="form.Gender"
            :items="this.genders"
            :rules="[(v) => !!v || 'Gender is required']"
            label="Gender"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            prepend-icon="mdi-school"
            v-model="form.EnglishEducation"
            :items="this.englishEducations"
            :rules="[(v) => !!v || 'Education is required']"
            label="Education"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-format-list-checks"
            v-model="form.EnglishOccupation"
            :rules="occupation"
            label="Occupation"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-checkbox
            prepend-icon="mdi-home"
            v-model.number="form.HouseOwnerFlag"
            :error-messages="errors"
            value="1"
            label="House Owner"
            type="checkbox"
            required
          ></v-checkbox>
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            prepend-icon="mdi-earth"
            v-model="form.Region"
            :items="this.regions"
            :rules="[(v) => !!v || 'Region is required']"
            :label="$t('region')"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            prepend-icon="mdi-sign-direction"
            v-model="form.CommuteDistance"
            :items="this.commuteDistances"
            :rules="[(v) => !!v || 'Commute Distance is required']"
            label="Commute Distance"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-ruler"
            v-model.number="form.Height"
            label="Height"
            suffix="cm"
            type="number"
            min="0"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            prepend-icon="mdi-dumbbell"
            v-model.number="form.Weight"
            label="Weight"
            suffix="kg"
            type="number"
            min="0"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            prepend-icon="mdi-triangle"
            v-model="form.Religion"
            :items="this.religions"
            :rules="[(v) => !!v || 'Religion is required']"
            label="Religion"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-btn color="success" class="mr-4" @click="validate">
            Soumettre
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn color="error" class="mr-4"> Reset</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    form: {},
    ageRules: [
      (v) => v > 0 || "Age is required",
      (v) => (v && Number.isInteger(Number(v))) || "Age must be an integer",
    ],
  }),
  props: {
    regions: {
      type: Array,
      required: false,
    },
    maritalStatuses: {
      type: Array,
      required: false,
    },
    genders: {
      type: Array,
      required: false,
    },
    englishEducations: {
      type: Array,
      required: false,
    },
    commuteDistances: {
      type: Array,
      required: false,
    },
    religions: {
      type: Array,
      required: false,
    },
  },
  methods: {
    validate: function () {
      this.$emit("submit", this.form);
    },
  },
};
</script>

<style>
</style>