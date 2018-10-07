<template>
  <div class="submit">
    <div class="wrapper">
      <button @click="goToUrl(dataInfo.url)" class="btn-submit">贷款申请</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailSubmit',
  props: {
    dataInfo: Object
  },
  methods: {
    goToUrl (path) {
      location.href = path
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-submit
  position fixed
  bottom .2rem
  left 50%
  margin-left -3.5rem
  width 7rem
  padding .15rem 0
  background #336699
  font-size .38rem
  font-weight bold
  letter-spacing .02rem
  color #fff
  border-radius .1rem
</style>
