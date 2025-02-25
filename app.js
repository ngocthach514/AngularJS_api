var app = angular.module('productApp', []);

app.controller('ProductController', function($scope, $http) {
    $scope.products = [];
    $scope.newProduct = {};

    // Load danh sách sản phẩm từ API
    function loadProducts() {
        $http.get('http://localhost:8000/api/products') // Thay đổi đường dẫn nếu cần
            .then(function(response) {
                $scope.products = response.data;
            })
            .catch(function(error) {
                console.error("Lỗi khi tải danh sách sản phẩm:", error);
            });
    }

    // Gọi hàm để load sản phẩm ngay khi trang tải
    loadProducts();

    // Thêm sản phẩm mới
    $scope.addProduct = function() {
        $http.post('http://localhost:8000/api/products', $scope.newProduct)
            .then(function(response) {
                $scope.products.push(response.data); // Thêm sản phẩm vào danh sách hiển thị
                $scope.newProduct = {}; // Reset form
            })
            .catch(function(error) {
                console.error("Lỗi khi thêm sản phẩm:", error);
            });
    };
});
