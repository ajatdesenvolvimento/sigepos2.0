app.controller('index',function($rootScope,$scope){
  $rootScope.include_page = "modules/index/index.html";
  $scope._ordemServico = function(){};
  $scope._categorias = function(){
    $rootScope.include_page = "modules/categorias/categorias.html";
    console.log('foi');
  };
  $scope._tecnicos = function(){};
  $scope._clientes = function(){};
  $scope._contatos = function(){};
  $scope._relatorios = function(){};
  $scope._configuracoes = function(){};
});
