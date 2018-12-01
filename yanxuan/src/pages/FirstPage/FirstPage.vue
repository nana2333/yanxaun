<template>
  <div class="container">
    <div><img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" class="headerImg"/></div>
    <div><img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg"></div>
    <div class="con">
      <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg"/>
      <p class="download"></p>
      <p class="continue" @click="toHome"></p>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {
      toHome () {
        this.$router.replace('/home')
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .container
    height 1334px
    background #eee
    div
      background #ccc
      img
        width 750px
        vertical-align top

    .con
      position relative
      .download
        width 240px
        height 88px
        position absolute
        left 156px
        top 95px

      .continue
        position absolute
        top 220px
        left 240px
        width 250px
        height 60px

</style>

