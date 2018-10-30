angular.module("EasyBag", []).controller('loginController', function ($scope,$http) {

    $scope.userEmail = '';
    $scope.userPass = '';

    $scope.user = {};

    $scope.login = function (fname,lname,email,password,mobile) {

        //Do login



        var req = {
            method: 'POST',
            url: 'https://www.easycarrybag.com/api/registration',

            data: { fname: $scope.userEmail, password: $scope.userPass }
        }

        $http(req).then(function successCallback(response) {
            var resp = response;
        }, function errorCallback(response) {

        });
    };

    $scope.setUser = function (user) {
        $scope.user = user;
    }
});