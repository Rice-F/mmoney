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
          <li
            class="item border-bottom"
            v-for="item of tabInfo"
            :key="item.id"
          >
            <img class="item-img" :src=host+item.icon alt="">
            <div class="item-info">
              <div class="item-title">
                <p class="name">{{item.name}}</p>
                <p class="pnum">申请人数：<span>{{item.apply_num}}</span></p>
              </div>
              <div class="item-cost">
                <p class="limit">额度：<span>{{item.limit}}</span></p>
                <p class="pay">费用：<span>{{item.price}}</span></p>
              </div>
              <p class="desc">{{item.desc}}</p>
            </div>
            <div class="triangle-top-left"></div>
          </li>
        </ul>
        <button
          class="loadMore"
          ref="loadMore"
        >{{loadText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
import axios from 'axios'
export default {
  name: 'ListTab',
  props: {
    queryValue: ''
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.getData()
  },
  watch: {
    queryValue (val) {
      this.init()
      this.getData(this.currentTabIndex)
    }
  },
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
      demo2: '最新口子',
      ulTop: 0,
      host: 'http://xhqb.ricefur.cn/uploads/',
      tabInfo: [], // 数据
      clock: null,
      currentTabIndex: 0, // 当前tab下标
      currentPage: 1, // 当前页数
      canScroll: true, // 是否继续加载
      loadText: 'loadMore...'// loadmore 显示文字
    }
  },
  methods: {
    handler (idx) {
      this.init()
      this.currentTabIndex = idx
      this.getData(idx)
    },
    init () {
      this.tabInfo = []
      this.currentPage = 1
      this.canScroll = true
      this.loadText = 'loadMore...'
    },
    getData (idx, page) {
      let params = '?'
      if (idx !== undefined) {
        params += 'type=' + idx + '&'
      }
      if (page !== undefined) {
        params += 'page=' + page + '&'
      }
      if (this.queryValue.length > 0) {
        params += 's=' + this.queryValue + '&'
      }
      axios.get('/api/product' + params)
        .then((response) => {
          let apiData = response.data
          console.log(apiData)
          this.currentPage = apiData.current_page
          if (apiData.total <= apiData.per_page * this.currentPage) {
            this.canScroll = false
            this.loadText = '暂无更多数据'
          }
          this.tabInfo = this.tabInfo.concat(apiData.data)
        })
    },
    isShow (node) {
      let winTop = window.innerHeight
      let scrollTop = document.documentElement.scrollTop
      let offsetTop = node.offsetTop
      // console.log(winTop)
      // console.log(scrollTop)
      // console.log(offsetTop)
      if (scrollTop + winTop > offsetTop) {
        return true
      } else {
        return false
      }
    },
    handleScroll () {
      if (this.canScroll) {
        let _this = this
        if (this.clock) {
          clearTimeout(this.clock)
        }
        this.clock = setTimeout(function () {
          if (!_this.isShow(_this.$refs.loadMore)) return
          _this.getData(_this.currentTabIndex, _this.currentPage + 1)
        }, 100)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .loadMore
    display: block
    width: 100px
    padding: 10px 0;
    margin: 10px auto 0
    background: #fff
    /*border:1px solid #F9CDAD*/
    border-radius: 3px
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
