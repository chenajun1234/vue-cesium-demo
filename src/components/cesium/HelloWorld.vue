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
       
    }
  }/*, 
  watch: {
      tracks: {
        handler (newVal, oldVal) {
          // newVal get already reactive object
           this.$forceUpdate()
        },
        deep: false,
    }
  }*/,
    mounted:function () {
     Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZDQwZjQ1Zi1lYzQzLTQ1YjMtYjI1Zi1mYzE5MmNlNmE3NTMiLCJpZCI6MTQ0NTYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjU2MDkyOTN9.jmrA_BO9tihdnEsmH7fxQdGupiVG4QG_Qei1jTGElZM'
        //创建viewer实例
        viewer = new Cesium.Viewer('cesiumContainer');
        var layer = viewer.imageryLayers.addImageryProvider(
          new Cesium.IonImageryProvider({ assetId: 3 })
      );
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
