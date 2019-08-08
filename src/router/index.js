import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout.vue';
import HelloWorld from '@/components/cesium/HelloWorld';
import HelloWorld2 from '@/components/cesium/HelloWorld2';
import HelloWorld3 from '@/components/cesium/HelloWorld3';
import HelloWorld4 from '@/components/cesium/HelloWorld4';

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
			      		{	path: 'HelloWorld2',component:HelloWorld2,name:'HelloWorld2',CNName:'hello 2'}
			      
			      ]
			    },
			     {
			      path: '/',
			      name: 'Layout',
			      CNName:'题头2',
			      component: Layout,
			      children:[
			      		{	path: 'HelloWorld3', component:HelloWorld3,name:'HelloWorld3',CNName:'hello 3'},
			      		{	path: 'HelloWorld4',component:HelloWorld4,name:'HelloWorld4',CNName:'hello 4'}
			      
			      ]
			    }
 		]
})
