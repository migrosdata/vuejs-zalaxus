<i18n>
{
  "en": {
    "hello": "hello world!",
    "slcLanguage": "Language"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  },
  "fr": {
      "hello": "Bonjour monde!",
      "slcLanguage": "Langue"
  }
}
</i18n>
<template>
    <div>
        <v-select
            v-model="language"
            :items='[
              {flag:"fr", name:"Français", code:"fr"},
              {flag:"gb", name:"English", code:"fen"},
              {flag:"jp", name:"Japanese", code:"ja"},
            ]'
            :label="$t('slcLanguage')"
              item-value="code"
        >
          <template v-slot:selection="{ item }">
            <span>
              <country-flag :country='item.flag' size='normal'/> {{ item.name }}
            </span>
          </template>
          <template v-slot:item="{ item }">
            <country-flag :country='item.flag' size='normal'/>
          </template>
        </v-select>  
        <p>message: {{ $t('hello') }}</p>
    </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    language: ""
  }),
  mounted() {
    this.language =  navigator.language.substr(0, 2);
  },
  watch: {
    language(val) {
        this.$i18n.locale = val;
    }
  }
}
</script>

<style>

</style>