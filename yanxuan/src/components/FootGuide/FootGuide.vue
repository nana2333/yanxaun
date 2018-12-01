<template>
  <footer class="footer border-1px">
    <nav>
        <span class="item" :class="{on: $route.path==='/home'}" @click="goto('/home')">
        <i class="iconfont icon-shouye4"></i>
      <span>首页</span>
    </span>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/find'}" @click="goto('/find')">
        <i class="iconfont icon-kongjianweixuan"></i>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/classify'}" @click="goto('/classify')">
        <i class="iconfont icon-drawer2chouti"></i>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/cart'}" @click="goto('/cart')">
        <i class="iconfont icon-gouwuche1"></i>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/personal'}" @click="goto('/personal')">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
      </a>
    </nav>
  </footer>
</template>

<script>
  export default {
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
  .footer
    position fixed
    z-index 5
    left 0
    right 0
    bottom 0
    height px2rem(100)
    background-color #fafafa
    border-top 1px solid #d9d9d9
    nav
      display flex
      flex-direction row
      justify-content space-around
      .item
        position relative
        text-align center
        color #666666
        &.on
          color $main
        i
          display block
          font-size px2rem(42)
          padding-top px2rem(16)
        span
          display block
          margin-top px2rem(10)
          font-size px2rem(24)
        &.active
          color $main
</style>
