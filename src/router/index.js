import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout.vue';
import HelloWorld from '@/components/cesium/HelloWorld';
import HelloWorld2 from '@/components/cesium/HelloWorld2';

Vue.use(Router)

export default new Router({
  routes: [
			    {
			      path: '/',
			      name: 'Layout',
			      CNName:'题头',
			      component: Layout,
			      children:[
			      		{	path: 'HelloWorld', component:HelloWorld,name:'HelloWorld',CNName:'hello 1'},
			      		{	path: 'HelloWorld2',component:HelloWorld,name:'HelloWorld2',CNName:'hello 2'}
			      
			      ]
			    }
 		]
})
