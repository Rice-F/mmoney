<template>
  <div class="search">
    <div class="wrapper">
      <div class="search-title">
        <span>文搜</span>
        <span>图搜</span>
      </div>
      <div class="search-content">
        <div class="search-input">
          请输入需要查询的贷款产品
        </div>
        <button>查网贷</button>
      </div>
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
    padding .2rem .4rem
    background #f7f7f7
    .search-title
      margin-bottom .2rem
      span
        display inline-block
        margin-right .2rem
    .search-content
      display flex
      .search-input
        flex 1
        height .64rem
        line-height .64rem
        padding-left .2rem
        background #fff
        color #ccc
      button
        min-width 1.4rem
        text-align center
        background #0ac19c
        color #fff
</style>
