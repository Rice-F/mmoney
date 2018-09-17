<template>
  <div class="detail-title">
    <div class="wrapper">
      <img class="title-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
      <div class="title-info">
        <div class="title">
          <p class="name">现金口袋</p>
          <p class="pay">1000-5000元</p>
        </div>
        <div class="pnum">
          <div class="icon"></div>
          <div class="num">申请人数：<span>52</span>人</div>
        </div>
        <div class="title-auth">
          <p class="id-card">身份证</p>
          <p class="mobil-auth">手机认证</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle'
}
</script>

<style lang="stylus" scoped>
.detail-title
  margin-bottom .25rem
  background #fff
  .wrapper
    display flex
    padding .2rem .4rem
    .title-img
      width 1.5rem
      height 1.5rem
      margin-right .2rem
      border-radius 50%
    .title-info
      flex 1
      .title
        overflow hidden
        margin-bottom .2rem
        .name
          float left
          font-size .32rem
          color #666
        .pay
          float right
          font-size .32rem
          color #ff7f32
      .pnum
        overflow hidden
        margin-bottom .2rem
        .icon
          float left
          width .35rem
          height .35rem
          margin-right .1rem
          background-color #70cee5
          border-radius 50%
        .num
          float left
          color #a2a2a2
      .title-auth
        overflow hidden
        .id-card
          float left
          padding .07rem .12rem
          margin-right .1rem
          background #eaf3fc
          border-radius .1rem
          color #97b4c0
        .mobil-auth
          float left
          padding .07rem .12rem
          background #fdf0dd
          border-radius .1rem
          color #f7ad6b
</style>
