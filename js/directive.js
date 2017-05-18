angularStore.directive('rightInfo', function(){
  return {
    restrict: 'ECMA',
    templateUrl: './partials/directiveRightInfo.html',
    scope: true,
    link: function(scope, elem, attrs) {

    },
    controller: function($scope) {
      $scope.urlBox=[
        {
          "url":"http://hecha.cn",
          "name":"和茶网官方网站"
        },
        {
          "url":"http://www.takozhang.cn/touch-hecha",
          "name":"和茶网移动端网站"
        },
        {
          "url":"",
          "name":"和茶网客服电话"
        },
        {
          "url":"",
          "name":"和茶网投诉建议"
        }
      ]
    }
  }
})
