app.controller('categoriasCtrl',function($scope,$rootScope){
  $rootScope.categoria = "minha categoria";
  $rootScope.categories = [
    {category_name: "Notebook",category_note:"apenas notebooks"},
    {category_name: "Netbook",category_note:"apenas netbooks"},
    {category_name: "Rede",category_note:"apenas redes"}
  ];
});
