<template>
  <div>
    <el-container style="height: auto; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          :default-active="$route.path"
          :default-openeds="['0']"
          :unique-opened="true"
          :router="true"
        >
          <!-- <el-menu :default-openeds="['1']">-->
            <template v-for="(item,k) in  baseRoutesList">
                  <el-submenu :key="k" :index='k+" "'>
                    <template slot="title">{{item.name}}{{k}}</template>
                    <template v-for="(child,i) in  item.children">
                      <el-menu-item :key="i" :index="item.path + child.path" >{{ child.CNName }}</el-menu-item>
                    </template>
                  </el-submenu>
            </template>    
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: left; font-size: 12px">
          <span id="titleText">示例地图</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
#map {
  height: 500px;
}
</style>

<script>
export default {
  data() {
    return {
      baseRoutesList: [],
      lightRoutesList: [],//灯光
      materialRoutesList: []//材质
    };
  },
  created() {

    this.baseRoutesList = this.$router.options.routes;
    /*for (let i = 0; i < lstRoutes.length; i++) {
      if (i < 12) {
        this.baseRoutesList.push(lstRoutes[i]);
      } else if (i>=12 && i<=19){
        this.lightRoutesList.push(lstRoutes[i]);
      }else{
        console.log('序号:'+i);
         this.materialRoutesList.push(lstRoutes[i]);
      }
    }*/
  }
};
</script>