<template>
  <div>    
      <div id="cesiumContainer"></div>     
  </div> 
</template>

<script>
import Cesium from 'cesium/Cesium'
export default {
  name: 'HelloWorld',
  data () {
    return {
       'viewer' : {}
    }
  }, 
    mounted:function () {
        //创建viewer实例
        this.viewer = new Cesium.Viewer('cesiumContainer');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
