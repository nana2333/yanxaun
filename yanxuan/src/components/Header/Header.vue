<template>
  <div class="header">
    <header class="per_header">
      <span class="per_to">
        <i class="iconfont icon-shouye1 left" @click="goto('/home')"></i>
        <div class="logo"></div>
        <i class="iconfont icon-sousuo search"></i>
        <i class="iconfont icon-gouwuche2 right" @click="goto('/cart')"></i>
      </span>
    </header>
  </div>
</template>
<script>
  export default{
    methods: {
      goto (path) {
        // 编程式路由导航
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    height px2rem(88)
    position fixed
    left 0
    top 0
    right 0
    z-index 5
    background #fafafa
    .per_header
      box-sizing border-box
      width px2rem(750)
      height px2rem(88)
      padding-left px2rem(24)
      padding-right px2rem(16)
      overflow hidden
      display flex
      align-items center
      justify-content space-between
      position relative
      .per_to
        .logo
          background url("../../images/icons.png")
          background-size px2rem(172) px2rem(398)
          background-position 0px -126px
          position absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          width px2rem(172)
          height px2rem(54)
          margin auto
        .iconfont
          font-size px2rem(54)
          &.search
            position absolute
            top 10px
            right 118px
          &.right
            position absolute
            top 20px
            right 25px


</style>
