<template>
  <div class="com-app">
    <NavBar2/>
    <!-- <SiderBar/> -->
    <transition>
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<script>
import NavBar2 from './components/NavBar2.vue'
import SiderBar from './components/SiderBar.vue'
  export default{
    data: function () {
      return {
      }
    },
    mounted: function () {
      
    },
    created() {
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
      NavBar2,
      SiderBar
      

    },
    methods: {
     

    }
  }
</script>
<style lang="scss">
</style>
