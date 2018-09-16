<template>
  <div>
    <list-swiper></list-swiper>
    <list-search></list-search>
    <list-tab></list-tab>
  </div>
</template>

<script>
import ListSwiper from './components/Swiper'
import ListSearch from './components/Search'
import ListTab from './components/Tab'

export default {
  name: 'List',
  components: {
    ListSwiper,
    ListSearch,
    ListTab
  }
}
</script>

<style scoped>

</style>
