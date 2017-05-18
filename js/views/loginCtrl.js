
loginCtrl.controller('loginController', ['$scope', '$http', '$location', function($scope,$http,$location){
  $scope.loginTo=function(){
    console.log($scope.username);
    $http({
      url:"http://localhost:3000/user/getByUsername?username="+$scope.username
    }).then(function(res){
      if(res.data.length>0){
        if(res.data[0].password==$scope.password){
          localStorage.setItem("username",$scope.username);
          $location.url('/home/main');
        }else{
          alert("密码错误！");
        }
      }else{
        alert("不存在此用户！");
      }
    })
  }


}])
