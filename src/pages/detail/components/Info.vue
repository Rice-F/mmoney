<template>
  <div class="info">
    <div class="wrapper">
      <p>{{dataInfo.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    dataInfo: Object
  }
}
</script>

<style lang="stylus" scoped>
.info
  background #fff
  .wrapper
    padding .4rem
    height 1.7rem
    p
      line-height 1.5
      color #666
</style>
