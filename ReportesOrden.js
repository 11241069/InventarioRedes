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
                for(var j=0;j<$scope.Orders[i].products.length;j++){
                    $("#GG").find('tbody')
                        .append($('<tr>')
                            .append($('<td>')
                                .append($scope.Orders[i].order_number)
                                
                            )
                            .append($('<td>')
                                
                                .append($scope.Orders[i].products[j].product_name)
                                
                            )
                            .append($('<td>')
                                
                                .append($scope.Orders[i].products[j].purchase_price)
                                
                            )
                            .append($('<td>')
                                
                                .append($scope.Orders[i].products[j].quantity)    
                                
                            )
                            .append($('<td>')
                                 
                                .append($scope.Orders[i].order_date)
                            )
                        );
                }
            }
            console.log($scope.Orders);
            console.log($scope.Orders.length);
            //console.log(response.data);
        });
    };
    ctrl.init();

}]);