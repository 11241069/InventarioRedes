angular.module('myApp').controller('crearproducto', ['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.submit = function () {
    
        var path = $location.path($location.path());
		//Creating the baseUrl
		var baseUrl = "http://fia.unitec.edu:8082/InventarioRedes/phpFiles/insertProducto.php";
        
var request = {
			method: 'POST',
			url: baseUrl,
			data: {product_barcode: $scope.barcode,product_name: $scope.nombre, product_category: $scope.categoria, purchase_price: $scope.purch,sell_price:$scope.sell}
	};
	
	$http(request).then(function(response){
        alert("agregado");
	});
         
 
};
}]);