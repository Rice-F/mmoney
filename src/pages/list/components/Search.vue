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
    display flex
    padding .2rem .4rem
    background #f7f7f7
    .search-input
      flex 1
      padding .2rem 0 .2rem .2rem
      background #fff
    button
      min-width 1.4rem
      text-align center
      background #0ac19c
      color #fff
</style>
