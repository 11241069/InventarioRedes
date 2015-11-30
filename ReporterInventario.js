angular.module('myApp').controller('reportes_inventario', ['$scope','$http','$location',function ($scope,$http,$location) {

    var ctrl = this;
    $
    $scope.atributosBusqueda = [];
    
    
    ctrl.init = function(){
        $.get("reporteinventario.php");
        
    };
    ctrl.init();

}]);