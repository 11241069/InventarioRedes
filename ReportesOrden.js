angular.module('myApp').controller('reportes_orden', ['$scope','$http','$location',function ($scope,$http,$location) {
"http://fia.unitec.edu:8082/InventarioRedes/phpFiles/getInventory.php"
    var ctrl = this;
    $scope.Orders = [];
    $scope.Productos=[];

    ctrl.init = function(){
        var baseUrl = "http://fia.unitec.edu:8082/InventarioRedes/phpFiles/getOrders.php";
        var request = {
                method: 'GET',
                url: baseUrl
        };
        $http(request).then(function(response){
            $scope.Orders = response.data;
            for(var i=0;i<$scope.Orders.length;i++){
                $("#GG").find('tbody')
                    .append($('<tr>')
                        .append($('<td>')
                            .append($scope.Orders[i].order_number)
                        )
                    );
            }
            
            console.log($scope.Orders.length);
            //console.log(response.data);
        });
    };
    ctrl.init();

}]);