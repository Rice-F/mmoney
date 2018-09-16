<template>
  <div class="search">
    <div class="wrapper">
      <input class="search-input" type="text" placeholder="请输入需要查询的贷款产品">
      <button>查网贷</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSearch'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    padding .2rem .4rem
    background #f7f7f7
    .search-input
      flex 1
      height .64rem
      line-height .64rem
      padding-left .2rem
      background #fff
    button
      min-width 1.4rem
      text-align center
      background #0ac19c
      color #fff
</style>
