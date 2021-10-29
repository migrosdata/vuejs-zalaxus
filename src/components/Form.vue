<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  }
}
</i18n>
<template>
    <p>message: {{ $t('hello') }}</p>
</template>

<script>
export default {
  data () {
    this.$i18n.locale = 'en';
    return { locale: 'en' }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<style>

</style>