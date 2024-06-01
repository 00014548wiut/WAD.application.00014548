angular.module('crudApp', [])
    .controller('productController', function($http) {
        var vm = this;
        vm.products = [];
        vm.editingProduct = {};
        vm.isEditModalOpen = false;
        vm.loginData = {};
        vm.registerData = {};
        var apiUrl = 'http://localhost:5177/api';

        // Function to fetch all products
        function getAllProducts() {
            $http.get(apiUrl + '/products')
                .then(function(response) {
                    vm.products = response.data;
                })
                .catch(function(error) {
                    console.error('Error fetching products:', error);
                });
        }
        getAllProducts();

        // Function to add a new product
        vm.addProduct = function() {
            $http.post(apiUrl + '/products', vm.newProduct)
                .then(function(response) {
                    getAllProducts();
                    vm.newProduct = {};
                });
        };  

        // Function to edit a product
        vm.editProduct = function(product) {
            // Copy the product data to editingProduct
            vm.editingProduct = angular.copy(product);
            // Open the edit modal
            vm.isEditModalOpen = true;
        };

        // Function to update a product
        vm.updateProduct = function() {
            $http.put(apiUrl + '/products/' + vm.editingProduct.productId, vm.editingProduct)
                .then(function(response) {
                    console.log('Product updated successfully:', response.data);
                    // Refresh the product list after update
                    getAllProducts();
                    // Reset the editingProduct object
                    vm.editingProduct = {};
                    // Close the edit modal
                    $('#editModal').modal('hide');
                })
                .catch(function(error) {
                    console.error('Error updating product:', error);
                });
        };

        // Function for user login
        vm.login = function() {
            debugger
            $http.post(apiUrl + '/Users/Login', vm.loginData)
                .then(function(response) {
                if(response && response.status === 200)
                    {
                        console.log('Login successful:', response.data);
                        // Clear login form
                        vm.loginData = {};
                        // Redirect or perform other actions after successful login
                        window.location.href = "dashboard.html";
                    }
                })
                .catch(function(error) {
                    console.error('Login error:', error);
                });
        };

        // Function for user registration
        vm.register = function() {
            debugger
            $http.post(apiUrl + '/Users/Registration', vm.registerData)
                .then(function(response) {
                    if(response && response.status === 200)
                        {
                        console.log('Registration successful:', response.data);
                        // Clear registration form
                        vm.registerData = {};
                        alert('User Registered successfully.')
                        }
                })
                .catch(function(error) {
                    vm.registerData = {};
                    alert(error.data);
                    console.error('Registration error:', error);
                });
        };

        // Function to delete a product
        vm.deleteProduct = function(productId) {
            if(window.confirm("Do you want to delete this record?"))
            {
                $http.delete(apiUrl + '/products/' + productId)
                    .then(function(response) {
                        getAllProducts();
                    })
                    .catch(function(error) {
                        console.error('Error deleting product:', error);
                    });
            }
        };
    });


