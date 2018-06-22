var app = angular.module("proj",[])
app.controller("projController",function($scope,$http){
			$scope.addInfo = function(){
				$http({
          url : "/newCreate",
          method : "POST",
          // sending Data's to Node
          //body { Key : value }
					data : {
            name: $scope.e_mail,
            email: $scope.p_word,
            phone_number: $scope.p_number,
            comments: $scope.comments
					},
				}).then((output) => {
          // see on browser console 
          console.log("Added success to mongo")
          window.location.reload()
        }).catch((err) => {
          console.log(err)
    });
}

$scope.getInfo = function(){
  $http({
    url : "/getData",
    method : "GET",
    // getting Data's from Node
  }).then((output) => {
    console.log(output)
    data = output.data[0]
      $scope.e_mail = data.name
      $scope.p_word =  data.email
      $scope.p_number =  data.phonenumber
      $scope.comments =  data.comments
  }).catch((err) => {
    console.log(err)
});
}

});
    // .success  .error deprecated  use .then .catch
  