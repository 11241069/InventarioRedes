angular.module('myApp').controller('reportes_inventario', ['$scope','$http','$location',function ($scope,$http,$location) {
"http://fia.unitec.edu:8082/InventarioRedes/phpFiles/getInventory.php"
    var ctrl = this;
    $scope.Productos = [];
    

    ctrl.init = function(){
        var baseUrl = "http://fia.unitec.edu:8082/InventarioRedes/phpFiles/getInventory.php";
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.Productos = response.data;
            console.log(response.data);
        });
    };
    ctrl.init();

}]);