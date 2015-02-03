persons=[{
nom :"Durand",
prenom :"Jean-Pierre",
},{
nom :"Dupond",
prenom :"Pierre",
},{
nom :"Pierre",
prenom :"Jean",
},{
nom :"Moyo",
prenom :"Jean",
},{
nom :"Armel",
prenom :"Jean-Pierre",
},{
nom :"Durand",
prenom :"Pierre",
},{
nom :"Durand",
prenom :"Jean",
}]
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('UsersCtrls', function($scope){
    $scope.users=persons;

})


.controller('UserCtrlx', function($scope,$http){
    $http.get('http://www.w3schools.com/website/Customers_JSON.php').then(function(resp) {
        console.log('Succes',resp);
                $scope.users=resp;
    },function(err){
        console.error('ERR',err);    
    })})


.controller('UsersCtrl', function($scope,$http){
    $http.get('http://localhost:8080/pharmacie/produits/rest').success(function(resp) {
       
                $scope.users=resp;
        
    },function(err){
        console.error('ERR',err);    
    })
   
    $scope.delThis=function(){
        
    }
    
    $scope.updateThis=function(){
        
    }

})   



// Simple POST jeson objet:
.controller('UserAddCtrl', function($scope,$http){
      $scope.produit={};
       

    $scope.addUser=function(){
        var p=$scope.produit;   

 $http.post('http://localhost:8080/pharmacie/produits/create',p)
             .success(function(data,status,headers,config){
            $scope.message=data;

        });

    };

    })



// Simple POST urlMarke :
.controller('UserAddCtrld', function($scope,$http){
    
      $scope.produit={}
   
    $scope.addUser=function(){
        
        console.log($scope.produit);
        var p=$scope.produit;
      
         var rl= 'namep='+ p.name + '&refp=' + p.numeroRef + '&prixp=' + p.prix+'&qtep=' +p.qte;
      
        $http.post('http://localhost:8080/pharmacie/produits/addproduit?'+rl)
             .success(function(data, status, headers, config) {
			$scope.message = data;
            console.log('Success',data);
		      }).error(function(data, status, headers, config) {
		      alert( "failure message: " + JSON.stringify({data: data}));
	       });
   
    }

		
      
    });












