<template>
  <div class="detail-borrow">
    <div class="wrapper">
      <div class="borrow-title">
        <div class="borrow-balance border-right">
          <div class="borrow-name">
            <span class="icon"></span>
            <p class="name">借款金额</p>
          </div>
          <div class="pay">{{dataInfo.limit}}元</div>
        </div>
        <div class="borrow-life">
          <div class="life-name">
            <span class="icon"></span>
            <p class="name">借款期限</p>
          </div>
          <div class="day">{{dataInfo.limit_date}}</div>
        </div>
      </div>
      <div class="borrow-cont border">
        <div class="borrow-cont-title">
          <p>借款年龄</p>
          <p>办理时间</p>
          <p>审核方式</p>
        </div>
        <div class="borrow-cont-info">
          <p>{{dataInfo.limit_age}}</p>
          <p>{{dataInfo.apply_time}}</p>
          <p>{{dataInfo.check_type}}</p>
        </div>
      </div>
    </div>
  </div>
</template>s

<script>
export default {
  name: 'DetailBorrow',
  props: {
    dataInfo: Object
  }
}
</script>

<style lang="stylus" scoped>
.detail-borrow
  margin-bottom .25rem
  background #fff
  .wrapper
    padding 0 .4rem .4rem
    .borrow-title
      display flex
      .borrow-balance,
      .borrow-life
        flex 1
        .borrow-name,
        .life-name
          padding .4rem 0 .3rem
          .icon
            display inline-block
            width .35rem
            height .35rem
            margin-right .1rem
            vertical-align top
            background-color #a6a6a6
            border-radius 50%
          .name
            display inline-block
            vertical-align top
            font-size .32rem
            color #666
        .pay,
        .day
          margin-left .45rems
          padding-bottom .4rem
          font-size .32rem
          color #ff7f32
      .borrow-life
        margin-left .4rem
        .days
          margin-left .65rem
    .borrow-cont
      padding .4rem
      background #fff
      .borrow-cont-title
        display flex
        margin-bottom .2rem
        p
          flex 1
          font-size .32rem
          color #c6c6c6
      .borrow-cont-info
        display flex
        p
          flex 1
          font-size .32rem
          color #666
</style>
