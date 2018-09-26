<template>
  <div>
    <list-swiper :swiperInfo="swiperInfo"></list-swiper>
    <list-search @search="handleSearch"></list-search>
    <list-tab :queryValue="queryValue"></list-tab>
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
    // this.getListInfo()
  },
  data () {
    return {
      swiperInfo: [],
      listInfo: [],
      queryValue: ''
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
    },
    handleSearch (value) {
      this.queryValue = value
    }
    // getListInfo () {
    //   axios.get('/api/product/')
    //     .then((response) => {
    //       this.listInfo = response.data.data
    //       console.log(this.listInfo)
    //     })
    // }
  }
}
</script>

<style scoped>

</style>
