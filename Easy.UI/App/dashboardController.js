angular.module("EasyBag", []).controller('dashboardController', function ($scope) {

    $scope.userProfile = {};

    var dataCookie = getCookie('userInfo');
    if (dataCookie != undefined && dataCookie != '') {
        $scope.userProfile = JSON.parse(dataCookie);
    }
    else {
        location.href = "index.html";
    }
    $scope.coreTemplate = "view/tasklist.html";

    $scope.templateUrl = function () {
        return $scope.coreTemplate;
    }
    $scope.setBooking = function () {
        $scope.coreTemplate = "view/booking.html";
    }

    $scope.setDashboard = function () {
        $scope.coreTemplate = "view/tasklist.html";
    }

    $scope.setUserProfile = function () {
        $scope.coreTemplate = "view/userprofile.html";
    }

    $scope.setQuote = function () {
        $scope.coreTemplate = "view/senderQuote.html";
    }

    $scope.reports = function () {
        $scope.coreTemplate = "view/Reports.html";
    }

    $scope.setCarrerProfile = function () {
        $scope.coreTemplate = "view/carrer.html";
    }
    var logoutData = localStorage.getItem("logout");
    if (logoutData == 'yes') {
        localStorage.removeItem("logout");


    }
    $scope.taskList = [];
    var dashboardData = {};
    var tasks = localStorage.getItem("tasklist");
    if (tasks != undefined) {

        $scope.taskList = JSON.parse(tasks);

    }
    else {
        dashboardData.No = 1;
        dashboardData.Package = "IPhone";
        dashboardData.From = "Bangalore";
        dashboardData.To = "New York";
        dashboardData.Amount = "$77.99";
        dashboardData.Date = "May 15, 2015";
        dashboardData.Progress = "25";

        $scope.taskList.push(dashboardData);
        dashboardData = {};
        dashboardData.No = 2;
        dashboardData.Package = "Multiple items";
        dashboardData.From = "Delhi";
        dashboardData.To = "Dubai";
        dashboardData.Amount = "$245.30";
        dashboardData.Date = "July 1, 2015";
        dashboardData.Progress = "60";

        $scope.taskList.push(dashboardData);
        dashboardData = {};
        dashboardData.No = 3;
        dashboardData.Package = "Watch";
        dashboardData.From = "San Jose";
        dashboardData.To = "Chennai";
        dashboardData.Amount = "$138.00";
        dashboardData.Date = "Oct 12, 2015";
        dashboardData.Progress = "85";

        $scope.taskList.push(dashboardData);

        var taskJson = JSON.stringify($scope.taskList);
        localStorage.setItem("tasklist", taskJson);
    }

});