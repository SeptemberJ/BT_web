<template>
<div>
  <!-- <NavBar/>
    <SiderBar/> -->
    <Carousel/>
    <CarouselTwoBlock/>

</div>

</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import NavBar from '../components/NavBar.vue'
import SiderBar from '../components/SiderBar.vue'
import Carousel from '../components/Carousel.vue'
import CarouselTwoBlock from '../components/CarouselTwoBlock.vue'
  export default{
    data: function () {
      return {
        
      }
    },
    mounted: function () {
      
    },
    created: function () {
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
      NavBar,
      SiderBar,
      Carousel,
      CarouselTwoBlock
      

    },
    methods: {
    }
  }
</script>
<style lang="scss">
.Index{
  
}
</style>