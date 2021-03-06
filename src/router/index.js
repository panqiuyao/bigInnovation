import Vue from 'vue'
import Router from 'vue-router'

//组件
import index from '@/components/index'
import home from '@/components/home'
import center from '@/components/center'
import comprehensive from '@/components/comprehensive'
import innovation from '@/components/innovation'
import industry from '@/components/industry'
import personnel from '@/components/personnel'
import capital from '@/components/capital'
import video from '@/components/video'
import videoplay from '@/components/videoplay'

import comcon from '@/components/comcon'



import centercon from '@/components/centercon'

Vue.use(Router)

export default new Router({
  routes: [
    {
			//首页
      path: '/',
      name: 'index',
      component: index
    },


		{

			//PPT
			path: '/centercon/:id/:num',
			name: 'centercon',
			meta:{index:130002},
			component: centercon,
		},
		{
								//视频
								path: '/videoplay/:id',
								name: 'videoplay',
								meta:{index:130001},
								component: videoplay
		},
		{	
			//二级页面
				path: '/home',
				name: 'home',
				component: home,
				children: [
							{
								//中心简介
								path: 'center',
								name: 'center',
								meta:{index:10},
								component: center
							},
							{
								//综合服务
								path: 'comprehensive',
								name: 'comprehensive',
								meta:{index:11},
								redirect:'/home/comprehensive/innovation',
								component: comprehensive,
								children:[
									{
										//创新链
										path: 'innovation',
										name: 'innovation',
										meta:{index:110},
										component: innovation,
									},
									{
										//产业链
										path: 'industry',
										name: 'industry',
										meta:{index:120},
										component: industry,
									},
									{
										//人才链
										path: 'personnel',
										name: 'personnel',
										meta:{index:130},
										component: personnel,
									},
									{
										//资金链
										path: 'capital',
										name: 'capital',
										meta:{index:140},
										component: capital,
									}
								]
							},
							{
								//图片轮播
								path: 'comcon/:id',
								name: 'comcon',
								meta:{index:130000},
								component: comcon
							},
							{
								//视频
								path: 'video/:id',
								name: 'video',
								meta:{index:120000},
								component: video
							},



      ]
			
		}
  ]
})
