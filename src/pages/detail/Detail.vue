<template>
  <div class="detail">
    <detail-title></detail-title>
    <detail-borrow></detail-borrow>
    <detail-info></detail-info>
    <detail-submit></detail-submit>
  </div>
</template>

<script>
import DetailTitle from './components/Title'
import DetailBorrow from './components/Borrow'
import DetailInfo from './components/Info'
import DetailSubmit from './components/Submit'

export default {
  name: 'Detail',
  components: {
    DetailTitle,
    DetailBorrow,
    DetailInfo,
    DetailSubmit
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
