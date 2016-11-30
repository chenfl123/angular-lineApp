;(function(){
	angular.module('myMall',['ngRoute','myMall.ctrl'])
	// 配置路由
	.config([
		'$routeProvider',
		function($routeProvider){
			// 首页路由
			$routeProvider.when('/home',{
				templateUrl:'view/home.html',
				controller:'homeController'
			})
			.when('/list',{
				templateUrl:'view/list.html',
				controller:'listController'
			})
			.when('/shopcar',{
				templateUrl:'view/shopcar.html',
				controller:'shopcarController'
			})
			.when('/center',{
				templateUrl:'view/center.html',
				controller:'centerController'
			})
			.when('/goods/:id',{
				templateUrl:'view/goods.html',
				controller:'goodsController'
			})
			.otherwise({
				redirectTo:'/home'
			})
		}
		])
	// 配置全局对象
	.run([
		'$rootScope',
		function($rootScope){
			$rootScope.page={};
		}
	])

})();