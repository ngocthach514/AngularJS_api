var app = angular.module('productApp', []);

app.controller('ProductController', function($scope, $http) {
    $scope.products = [];
    $scope.newProduct = {};

    function loadProducts() {
        $http.get('http://localhost:8000/api/products')
            .then(function(response) {
                $scope.products = response.data;
            })
            .catch(function(error) {
                console.error("Lỗi khi tải danh sách sản phẩm:", error);
            });
    }

    loadProducts();

    $scope.addProduct = function() {
        $http.post('http://localhost:8000/api/products', $scope.newProduct)
            .then(function(response) {
                $scope.products.push(response.data);
                $scope.newProduct = {};
            })
            .catch(function(error) {
                console.error("Lỗi khi thêm sản phẩm:", error);
            });
    };
});
