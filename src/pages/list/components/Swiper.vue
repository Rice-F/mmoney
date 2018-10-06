<template>
 <div class="wrapper">
   <swiper :options="swiperOption">
     <swiper-slide
       v-for="(item,idx) of swiperInfo"
       :key="idx"
     >
       <a :href="item.path"><img class="swiper-img" :src="host+item.url" alt=""></a>
     </swiper-slide>
     <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
 </div>
</template>

<script>
export default {
  name: 'ListSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
        // preventClicks: false
      },
      host: 'http://xhqb.ricefur.cn/uploads/'
    }
  },
  props: {
    swiperInfo: Array
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%             /*以上的写法：相对图片宽度的33%，提前撑开图片的高度所占位置*/
    background #eee
    .swiper-img
      width 100%
</style>
