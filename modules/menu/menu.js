app.controller('menuCtrl',function($rootScope,$scope){
  $rootScope.include_page = "modules/ordemServico/ordemServico.html";
  $scope._ordemServico = function(){
    $rootScope.include_page = "modules/ordemServico/ordemServico.html";
  };
  $scope._categorias = function(){
    $rootScope.include_page = "modules/categorias/categorias.html";
  };
  $scope._tecnicos = function(){};
  $scope._clientes = function(){};
  $scope._contatos = function(){};
  $scope._relatorios = function(){};
  $scope._configuracoes = function(){};
});
