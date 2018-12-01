<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'


  export default {
//    methods: {
//      resetTop () {
//        window.scrollTo(0, 0)
//      }
//      },
    components:{
      FootGuide
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
