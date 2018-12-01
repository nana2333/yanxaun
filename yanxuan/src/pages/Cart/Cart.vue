<template>
  <div class="shopCart">
    <Title class="title">购物车</Title>
    <div class="cart">
      <div class="cartText">
        <ul class="cart_lists">
          <li class="cart_li">
            <a>
              <i class="iconfont icon-yuandian"></i>
              <span class="text">满88元免邮费</span>
            </a>
          </li>
          <li class="cart_li">
            <a>
              <i class="iconfont icon-yuandian"></i>
              <span class="text">30天无忧退货</span>
            </a>
          </li>
          <li class="cart_li">
            <a>
              <i class="iconfont icon-yuandian"></i>
              <span class="text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
      <img src="../../images/jingling2.png" alt="">
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .shopCart
    height 100%
    .title
      width 100%
      height px2rem(50)
</style>
