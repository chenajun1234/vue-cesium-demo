<template>
  <div>    
      <div id="cesiumContainer"></div>     
  </div> 
</template>

<script>
import Cesium from 'cesium/Cesium'

let viewer =null;
export default {
  name: 'HelloWorld',
  data () {
    return {
       'viewer' : {}
    }
  }, 
    mounted:function () {
        //创建viewer实例
        viewer = new Cesium.Viewer('cesiumContainer');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app,#cesiumContainer {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
