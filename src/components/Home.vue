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
        <h2 class="headline font-weight-bold mb-3">
        Saisir les données d'un prospect
        </h2>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-select
              :items="['North America', 'Europe', 'Pacific']"
              filled
              label="Region"
            ></v-select>  
            <v-text-field
              v-model="age"
              :rules="nameRules"
              label="Age"
              type="number"
              min="0"
              step="1"
              required
            ></v-text-field>        
            <v-select
              :items="['Single', 'Married']"
              filled
              label="Marital Status"
            ></v-select>              
            <v-select
              :items="['F', 'M']"
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
              filled
              label="Religion"
            ></v-select>               
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Soumettre
            </v-btn>
        
            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset</v-btn>
        
            <v-btn
              color="warning"
              @click="resetValidation"
            >
              Reset Validation
            </v-btn>
          </v-form>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      //
    }),
  }
</script>
