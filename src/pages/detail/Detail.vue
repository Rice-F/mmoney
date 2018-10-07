<template>
  <div class="detail">
    <x-header
      style="background: #336699"
    ></x-header>
    <detail-title :dataInfo="dateInfo"></detail-title>
    <detail-borrow :dataInfo="dateInfo"></detail-borrow>
    <detail-info :dataInfo="dateInfo"></detail-info>
    <detail-submit :dataInfo="dateInfo"></detail-submit>
  </div>
</template>

<script>
import axios from 'axios'
import DetailTitle from './components/Title'
import DetailBorrow from './components/Borrow'
import DetailInfo from './components/Info'
import DetailSubmit from './components/Submit'
import { XHeader } from 'vux'

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
    DetailSubmit,
    XHeader
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/product/' + this.$route.params.id)
        .then((response) => {
          this.dateInfo = response.data.data
          console.log(this.dateInfo)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
>>>.vux-header .vux-header-left a
    color #fff
>>>.vux-header .vux-header-left .left-arrow:before
    border-color #fff
>>>.vux-header .vux-header-title
    color #fff
  .detail
    padding-bottom 1rem
</style>
