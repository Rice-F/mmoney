<template>
  <div class="tab">
    <div>
      <tab
        :line-width=2
        active-color='#0ac19c'
        v-model="index"
      >
        <tab-item
          class="vux-center"
          :selected="demo2 === item"
          v-for="(item, index) in list2"
          @click="demo2 = item"
          :key="index"
          @on-item-click="handler(index)"
        >
          {{item}}
        </tab-item>
      </tab>
      <div class="tab-swiper vux-center">
        <ul>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
            <div class="triangle-top-left"></div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
            <div class="triangle-top-left"></div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
            <div class="triangle-top-left"></div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
          </li>
          <li class="item border-bottom">
            <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">创意1</p>
                <p class="pnum">申请人数：<span>2932</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>1000-5000</span></p>
                <p class="pay">费用：<span>0.02%</span></p>
              </div>
              <p class="desc">审核到账5-10分钟，不需要任何前期费用</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
export default {
  name: 'ListTab',
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list2: ['最新口子', '热门口子', '推荐口子'],
      index: 0,
      demo2: '最新口子'
    }
  },
  methods: {
    handler (index) {
      if (index === 0) {
        this.ulDate = [0, 1, 2]
      } else if (index === 1) {
        this.ulDate = [3, 4, 5]
      } else {
        this.ulDate = [6, 7, 8]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item
    position relative
    display flex
    box-sizing border-box
    height 1.9rem
    padding .2rem
    .item-img
      width 1.5rem
      height 1.5rem
      margin-right .2rem
      border-radius 50%
    .item-info
      flex 1
      .item-title,
      .item-cost
        overflow hidden
        margin-bottom .28rem
        .name
          float left
          font-size .32rem
          color #666
        .pnum
          float right
          color #a2a2a2
          span
            color #ff7f32
        .limit
          float left
          margin-right .2rem
          color #a2a2a2
          span
            color #ff7f32
        .pay
          float left
          color #a2a2a2
          span
            color #ff7f32
      .desc
        color #a2a2a2
    .triangle-top-left {
      position absolute
      top 0
      left 0
      width: 0;
      height: 0;
      border-top: .6rem solid red;
      border-right: .6rem solid transparent;
    }
</style>
