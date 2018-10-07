<template>
  <div class="search">
    <div class="wrapper">
      <input class="search-input" @keyup.enter="handleQueryClick" v-model="inputValue" type="text" placeholder="请输入需要查询的贷款产品">
      <button @click="handleQueryClick()">查网贷</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSearch',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleQueryClick () {
      let value = this.inputValue.trim()
      this.$emit('search', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    position relative
    padding .2rem .4rem
    background #f7f7f7
    .search-input
      overflow hidden
      width 100%
      height .64rem
      line-height .64rem
      padding-left .2rem
      border-radius .9rem
      background #fff
    button
      position absolute
      right .2rem
      bottom .2rem
      min-width 1.8rem
      height .64rem
      text-align center
      border-top-right-radius .9rem
      border-bottom-right-radius .9rem
      background #336699
      color #fff
</style>
