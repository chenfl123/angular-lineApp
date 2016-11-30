;
(function() {
    angular.module('myMall.ctrl', [])
        .controller('homeController', [
            '$scope',
            '$rootScope',
            '$http',
            function($scope, $rootScope, $http) {
                $rootScope.page.title = '首页';
                $rootScope.page.current = 'home';

                $http.get('data/goodslist.json')
                    .success(function(res) {
                        console.log(res);
                        $scope.clothes = res.filter(function(item) {

                            return item.category == 'clothes';
                        })
                        $scope.earing = res.filter(function(item) {
                            return item.category == 'earing';
                        })
                        $scope.perfume = res.filter(function(item) {
                            return item.category == 'perfume';
                        })
                    })

            }
        ])
        .controller('listController', [
            '$scope',
            '$rootScope',
            '$http',
            function($scope, $rootScope, $http) {
                $rootScope.page.title = '列表页';
                $rootScope.page.current = 'list';

         
                $http.get('data/goodslist.json')
                .success(function(res) {
                    $scope.class = function(type) {
                        $scope.type = res.filter(function(item) {
                            return item.category == type;

                        })  
                        $scope.current=type;

                    }
                    // 默认先加载的是服饰
                    $scope.class('clothes');


                })

            }
        ])
        .controller('shopcarController', [
            '$scope',
            '$rootScope',
            function($scope, $rootScope) {
                $rootScope.page.title = '购物车';
                $rootScope.page.current = 'shopcar';


            }
        ])
        .controller('centerController', [
            '$scope',
            '$rootScope',
            function($scope, $rootScope) {
                $rootScope.page.title = '个人中心';
                $rootScope.page.current = 'center';

            }
        ])
        .controller('goodsController', [
            '$scope',
            '$http',
            '$rootScope',
            '$routeParams',
            function($scope, $http, $rootScope, $routeParams) {
                $rootScope.page.title = '商品详情';
                $rootScope.page.current = 'goods';

                $http.get('data/goodslist.json')
                .success(function(res) {
                    console.log(res)
                    var goods = res.filter(function(item) {
                        // 当前item的id等于$routeParams.id
                        return item.id == $routeParams.id;
                    });

                    $scope.goods = goods[0];
                    console.log($scope.goods)

                })

            }
        ])

})();
