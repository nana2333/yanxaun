<template>
  <div class="personal">
    <Header/>
    <div class="per_content">
      <div class="spring_logo">
        <img src="../../images/jingling1.png" alt="">
      </div>
      <div class="per_login">
        <div class="btn">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
        <div class="btn btnE">
          <i class="iconfont icon-email"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="register">
        <span>手机账号快捷注册</span>
        <i class="iconfont icon-icon"></i>
      </div>
    </div>
    <div class="otherLoin">
      <span><i class="iconfont icon-yingdaicon04"></i>微信</span>
      <span>|</span>
      <span><i class="iconfont icon-qq"></i>QQ</span>
      <span>|</span>
      <span><i class="iconfont icon-weibo"></i>微博</span>
    </div>
  </div>

</template>
<script>
  import Header from '../../components/Header/Header.vue'
  export default{

    components:{
      Header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
body
  background-color #f2f5f4
  .personal
    width 100%
    height 100%
    padding-top px2rem(88)
    background #f2f5f4
    position relative
    .per_content
      height 100%
      >.spring_logo
        text-align center
        padding px2rem(120) 0
        >img
          width px2rem(300)
          height px2rem(104)
      >.per_login
        height px2rem(250)
        padding 0 px2rem(42)
        >.btn
          width 100%
          height px2rem(86)
          display flex
          margin-bottom px2rem(40)
          justify-content center
          line-height px2rem(86)
          border px2rem(2) solid $main
          border-radius px2rem(6)
          background-color $main
          font-size px2rem(28)
          color white
          >.iconfont
            font-size px2rem(40)
            color white
            margin-right px2rem(10)
          &.btnE
            background white
            color $main
            .iconfont
              font-size px2rem(40)
              color $main
              margin-right px2rem(10)


      >.register
        width 100%
        font-size px2rem(28)
        color #333
        text-align center
        .iconfont
          font-size px2rem(28)
    .otherLoin
      position absolute
      bottom -520px
      left 115px
      span
        margin 0 px2rem(10)
        color #979797
        font-size px2rem(28)
        .iconfont
          margin 0 px2rem(15)
          font-size px2rem(36)


</style>
