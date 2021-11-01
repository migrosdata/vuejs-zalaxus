<template>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-select
              :items="['North America', 'Europe', 'Pacific']"
              :rules="[v => !!v || 'Region is required']"
              filled
              label="Region"
            ></v-select>  
            <v-text-field
              v-model="age"
              :rules="ageRules"
              label="Age"
              type="number"
              min="0"
              step="1"
              required
            ></v-text-field>        
            <v-select
              :items="['Single', 'Married']"
              :rules="[v => !!v || 'Marital status is required']"              
              filled
              label="Marital Status"
            ></v-select>              
            <v-select
              :items="['F', 'M']"
              :rules="[v => !!v || 'Gender is required']"
              filled
              label="Gender"
            ></v-select>               
            <v-text-field
              v-model="yearlyIncome"
              :rules="yearlyIncome"
              label="Yearly Income"
              required
              type="number"
            ></v-text-field>    
            <v-text-field
              v-model="totalChildren"
              :rules="totalChildren"
              label="Total Children"
              required
              type="number"
            ></v-text-field>      
            <v-text-field
              v-model="numberChildrenAtHome"
              :rules="numberChildrenAtHome"
              label="Number children at home"
              required
              type="number"
            ></v-text-field>     
            <v-select
              :items="['Partial High School', 'High School', 'Partial College', 'Bachelors', 'Graduate Degree']"
              :rules="[v => !!v || 'Education is required']"
              filled
              label="Education"
            ></v-select>                     
            <v-text-field
              v-model="occupation"
              :rules="occupation"
              label="Occupation"
              required
            ></v-text-field>     
            <v-checkbox
              v-model="houseOwner"
              :error-messages="errors"
              value="1"
              label="House Owner"
              type="checkbox"
              required
            ></v-checkbox> 
            <v-text-field
              v-model="numberCarsOwned"
              :rules="numberCarsOwned"
              label="# cars Owned"
              required
              type="number"
              min="0"
            ></v-text-field>
            <v-slider
              v-model="numberCarsOwned"
              :rules="numberCarsOwned"
              color="orange"
              label="# cars Owned"
              hint="Be honest"
              min="1"
              max="10"
              thumb-label
            ></v-slider>
            <v-select
              :items="['0-1 Miles', '1-2 Miles', '2-5 Miles', '5-10 Miles', '10+ Miles']"
              :rules="[v => !!v || 'Commute Distance is required']"
              filled
              label="Commute Distance"
            ></v-select>    
            <v-text-field
              label="Height"              
              suffix="cm"
              type="number"
            ></v-text-field>
           <v-text-field
              label="Weight"              
              suffix="kg"
              type="number"
            ></v-text-field>
            <v-select
              :items="['Protestantism', 'Roman Catholicism', 'No religion']"
              :rules="[v => !!v || 'Religion is required']"
              filled
              label="Religion"
            ></v-select>               
            <v-btn
              color="success"
              class="mr-4"
              @click="validate"
            >
              Soumettre
            </v-btn>
        
            <v-btn
              color="error"
              class="mr-4"
            >
              Reset</v-btn>
        
            <v-btn
              color="warning"
            >
              Reset Validation
            </v-btn>
          </v-form>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    ageRules: [
      v => v.length > 0 || 'Age is required',        
      v => (v && Number.isInteger(Number(v))) || 'Age must be an integer',
    ],
  }),
  methods: {
    validate: function () {
      this.$emit('submit');
    },
  }
}
</script>

<style>

</style>