<template>
  <div>
    <list-swiper :swiperInfo="swiperInfo"></list-swiper>
    <list-search></list-search>
    <list-tab></list-tab>
  </div>
</template>

<script>
import axios from 'axios'
import ListSwiper from './components/Swiper'
import ListSearch from './components/Search'
import ListTab from './components/Tab'

export default {
  name: 'List',
  mounted () {
    this.getSwiperInfo()
  },
  data () {
    return {
      swiperInfo: []
    }
  },
  components: {
    ListSwiper,
    ListSearch,
    ListTab
  },
  methods: {
    getSwiperInfo () {
      axios.get('/api/banner/')
        .then((response) => {
          this.swiperInfo = response.data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
