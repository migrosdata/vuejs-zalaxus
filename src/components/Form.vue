<template>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-select
              v-model="form.Region"
              :items="['North America', 'Europe', 'Pacific']"
              :rules="[v => !!v || 'Region is required']"
              label="Region"
            ></v-select>  
            <v-text-field
              v-model.number="form.Age"
              :rules="ageRules"
              label="Age"
              type="number"
              min="0"
              step="1"
              required
            ></v-text-field>        
            <v-select
              v-model="form.MaritalStatus"
              :items="['Single', 'Married']"
              :rules="[v => !!v || 'Marital status is required']"              
              label="Marital Status"
            ></v-select>              
            <v-select
              v-model="form.Gender"
              :items="['F', 'M']"
              :rules="[v => !!v || 'Gender is required']"
              label="Gender"
            ></v-select>               
            <v-text-field            
              v-model.number="form.YearlyIncome"
              :rules="yearlyIncome"
              label="Yearly Income"
              required
              type="number"
              min="0"
            ></v-text-field>    
            <v-text-field
              v-model.number="form.TotalChildren"
              :rules="totalChildren"
              label="Total Children"
              required
              type="number"
              min="0"
            ></v-text-field>      
            <v-text-field
              v-model.number="form.NumberChildrenAtHome"
              :rules="numberChildrenAtHome"
              label="Number children at home"
              required
              type="number"
              min="0"
            ></v-text-field>     
            <v-select
              v-model="form.EnglishEducation"
              :items="['Partial High School', 'High School', 'Partial College', 'Bachelors', 'Graduate Degree']"
              :rules="[v => !!v || 'Education is required']"
              label="Education"
            ></v-select>                     
            <v-text-field
              v-model="form.EnglishOccupation"
              :rules="occupation"
              label="Occupation"
              required
            ></v-text-field>     
            <v-checkbox
              v-model.number="form.HouseOwnerFlag"
              :error-messages="errors"
              value="1"
              label="House Owner"
              type="checkbox"
              required
            ></v-checkbox> 
            <v-text-field
              v-model.number="form.NumberCarsOwned"
              :rules="numberCarsOwned"
              label="# cars Owned"
              required
              type="number"
              min="0"
            ></v-text-field>
            <v-select
              v-model="form.CommuteDistance"
              :items="['0-1 Miles', '1-2 Miles', '2-5 Miles', '5-10 Miles', '10+ Miles']"
              :rules="[v => !!v || 'Commute Distance is required']"
              label="Commute Distance"
            ></v-select>    
            <v-text-field
              v-model.number="form.Height"
              label="Height"              
              suffix="cm"
              type="number"
              min="0"
            ></v-text-field>
           <v-text-field
              v-model.number="form.Weight"
              label="Weight"              
              suffix="kg"
              type="number"
              min="0"
            ></v-text-field>
            <v-select
              v-model="form.Religion"
              :items="['Protestantism', 'Roman Catholicism', 'No religion']"
              :rules="[v => !!v || 'Religion is required']"
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
          </v-form>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    form: {
    },
    ageRules: [
      v => v > 0 || 'Age is required',        
      v => (v && Number.isInteger(Number(v))) || 'Age must be an integer',
    ],
  }),
  methods: {
    validate: function () {
      this.$emit('submit', this.form);
    },
  }
}
</script>

<style>

</style>