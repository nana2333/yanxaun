<template>
  <div class="warp">
    <!--头部搜索-->
    <section class="search">
      <form class="search_form" action="#">
        <span>网易严选</span>
        <div class="search_sousuo">
          <div class="sContent">
            <i class="iconfont icon-sousuotianchong"></i>
            <input type="search" name="search" placeholder="搜索商品,共19900款好物" class="search_input">
          </div>
          <button class="login">登录</button>
        </div>
      </form>
    </section>
    <!--头部导航-->
    <nav class="header_nav">
      <ul class="nav-list"  ref="TUl" >
        <li><span>推荐</span></li>
        <li><span>居家</span></li>
        <li><span>文体</span></li>
        <li><span>配件</span></li>
        <li><span>服装</span></li>
        <li><span>电器</span></li>
        <li><span>洗护</span></li>
        <li><span>饮食</span></li>
        <li><span>餐厨</span></li>
        <li><span>婴童</span></li>
        <li><span>特色区</span></li>
      </ul>
    </nav>
    <!--轮播-->
    <Swiper/>
    <div class="swiper_bottom">
      <ul class="bottom_lists">
      <li class="bottom_li">
        <a>
          <i class="iconfont icon-xuanze"></i>
          <span class="text">网易自营品牌</span>
        </a>
      </li>
      <li class="bottom_li">
        <a>
          <i class="iconfont icon-xuanze"></i>
          <span class="text">30天无忧退货</span>
        </a>
      </li>
      <li class="bottom_li">
        <a>
          <i class="iconfont icon-xuanze"></i>
          <span class="text">48小时快速退款</span>
        </a>
      </li>
    </ul>
    </div>
    <Split/>
    <!--内容区-->
    <div class="content">
      <div class="content_wrap">
        <header class="title">
          <p>品牌制造商直供</p>
        </header>
        <div class="picInfo">
          <ul class="pic_list">
            <li class="lis">
              <a href="javascript:;">
                <img src="../../images/topic2.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="../../images/topic2.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="../../images/topic2.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="../../images/topic2.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content_wrap">
        <header class="title">
          <p>品牌制造商直供</p>
        </header>
        <div class="picInfo">
          <ul class="pic_list">
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content_wrap">
        <header class="title">
          <p>品牌制造商直供</p>
        </header>
        <div class="picInfo">
          <ul class="pic_list">
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content_wrap">
        <header class="title">
          <p>品牌制造商直供</p>
        </header>
        <div class="picInfo">
          <ul class="pic_list">
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
            <li class="lis">
              <a href="javascript:;">
                <img src="image/3.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

  import BScroll from 'better-scroll'
  import Split from '../../components/Split/Split.vue'
  import Swiper from '../../components/Swiper/Swiper.vue'
  export default{
    data(){
      return{

      }
    },
    mounted(){
      this._initScroll()
    },
    methods: {
      _initScroll(){
        new BScroll('.warp', {
          click: true
        })
        const ul=this.$refs.TUl
        const liWidth=64
        const space=20
        const count=19
        const width=(liWidth+space)*count-space+'px'
        ul.style.width=width
        new BScroll('.header_nav', {
          click:true,
          scrollX: true
        })
      }
    },
    computed:{

    },
    components:{
      Swiper
    },
    watch:{

    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .warp
    .search
      width 100%
      .search_form
        span
          position relative
          font-size px2rem(38)
          float left
          margin px2rem(20)
        clearFix()
        background-color #fff
        padding px2rem(24) px2rem(16)
        .search_sousuo
          .sContent
            position relative
            width px2rem(600)
            .iconfont
              font-size px2rem(44)
              position absolute
              top px2rem(16)
              left px2rem(186)
              width: px2rem(30)
              height: px2rem(40)
              z-index 5
            input
              height px2rem(70)
              padding 0 px2rem(12)
              border-radius px2rem(4)
              font-weight bold
              outline none
              line-height px2rem(70)
              &.search_input
                position absolute
                top 0
                left px2rem(180)
                float left
                width 70%
                border px2rem(8) solid #f2f2f2
                font-size px2rem(26)
                text-align center
                color #333
                background-color #f2f2f2
          .login
            position absolute
            width px2rem(80)
            height px2rem(50)
            top px2rem(36)
            right px2rem(24)
            border-radius px2rem(4)
            border px2rem(2) solid $main
            font-size px2rem(24)
            background white
    .header_nav
      width: 90%
      display block
      overflow: hidden
      white-space: nowrap
      margin 0 px2rem(60)
      .nav-list
        overflow hidden
        font-size 0
        li
          margin 0 px2rem(60)
          display: inline-block
          margin-right: px2rem(12)
        &:last-child
          margin: 0
          span
            font-size px2rem(32)

    .swiper_bottom
      width 100%
      display flex
      flex-wrap nowrap
      justify-content center
      align-items center
      .bottom_lists
        width 100%
        height px2rem(72)
        margin 0 px2rem(15)
        .bottom_li
          display inline-block
          padding 0 px2rem(10)
          .iconfont
            font-size px2rem(30)
            color red
          .text
            font-size px2rem(24)
            color black
    .content
      width 100%
      .content_wrap
        .title
          width 100%
          height px2rem(90)
          margin 0 px2rem(10)
          p
            font-size px2rem(36)
            text-align center
            line-height px2rem(90)
        .picInfo
          width 100%
          height px2rem(476)
          background indianred
          .pic_list
            height 100%
            margin 0 px2rem(15)
            background goldenrod


            .pic_lis
              width px2rem(250)
              height px2rem(230)
              background pink
              display flex
              img
                display inline-block
                width px2rem(130)
                height px2rem(118)
</style>
