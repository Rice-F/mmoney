<template>
  <div>
    <list-swiper></list-swiper>
    <list-search></list-search>
  </div>
</template>

<script>
import ListSwiper from './components/Swiper'
import ListSearch from './components/Search'

export default {
  name: 'List',
  components: {
    ListSwiper,
    ListSearch
  }
}
</script>

<style scoped>

</style>
