<template>
  <div class="detail">
    <detail-title :dataInfo="dateInfo"></detail-title>
    <detail-borrow :dataInfo="dateInfo"></detail-borrow>
    <detail-info :dataInfo="dateInfo"></detail-info>
    <detail-submit></detail-submit>
  </div>
</template>

<script>
import axios from 'axios'
import DetailTitle from './components/Title'
import DetailBorrow from './components/Borrow'
import DetailInfo from './components/Info'
import DetailSubmit from './components/Submit'

export default {
  name: 'Detail',
  mounted () {
    this.getDetailInfo()
  },
  data () {
    return {
      dateInfo: {}
    }
  },
  components: {
    DetailTitle,
    DetailBorrow,
    DetailInfo,
    DetailSubmit
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/product/' + this.$route.params.id)
        .then((response) => {
          this.dateInfo = response.data.data
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.detail
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background #e9f2fb
</style>
