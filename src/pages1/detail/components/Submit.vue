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
  position absolute
  bottom 2rem
  left 50%
  width 6rem
  margin-left -3rem
  padding .15rem 0
  background #336699
  font-size .38rem
  font-weight bold
  letter-spacing .02rem
  color #757575
  border-radius .1rem
</style>
