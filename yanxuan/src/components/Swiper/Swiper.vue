<template>
  <div class="mains">
    <div class="swiper-container">
      <div  class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in SwiperData" :key="index">
          <img :src="item" >
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted (){
      this.$store.dispatch('getSwiperData')
    },
    watch:{
      SwiperData (){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
            },
            autoplay:true,
          })
        })
      }
    },
    computed:{
      ...mapState(['SwiperData'])
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .mains
    height px2rem(400)
    margin-top px2rem(10)
    .swiper-container
      height 100%
      width 100%
      .swiper-wrapper
        width px2rem(6000)
        height 100%
        display flex
        .swiper-slide
          img
            width px2rem(750)
            height 100%
      .swiper-pagination-bullet
        width px2rem(40)
        height px2rem(8)
        background #ffffff
        opacity .4
        border-radius 0
      .swiper-pagination-bullet-active
        opacity 1

</style>
