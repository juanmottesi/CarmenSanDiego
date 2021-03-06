(function() {
  var app = angular.module('juegoAppModel', []);

  app.controller('juegoCtrl', function() {
    this.detective = detective;
    this.ordenDeArresto = null
    this.siguientePais = null
    this.ordenSinEmitir = null
    
    this.paisActual = function(){
      return this.detective.caso.ciudadActual.nombreDelPais;
    };
    
    this.setSiguientePais = function(newValue){
      this.siguientePais = newValue;
    };
    
    this.getSiguientePais = function(){
      return this.siguientePais;
    };
    
    this.isSetSiguientePais = function(value){
      return this.siguientePais === value;
    };
    
    this.actualizarPaises = function(){
      this.detective.caso.ciudadActual = this.siguientePais
      if(this.detective.caso.paisesVisitados.indexOf(this.siguientePais) == -1){
        this.detective.caso.paisesVisitados.push(this.siguientePais)
      }
    };
    
    this.setOrdenDeArresto = function(newValue){
      this.ordenDeArresto = newValue;
    };
    
    this.getOrdenDeArresto = function(){
      return this.ordenDeArresto;
    };
    
    this.isSetOrdenDeArresto = function(newValue){
      this.ordenDeArresto === newValue;
    };
    
    this.setOrdenSinEmitir = function(newValue){
      this.ordenSinEmitir = newValue;
    };
    
    this.getOrdenSinEmitir = function(){
      return this.ordenSinEmitir;
    };
    
    this.isSetOrdenSinEmitir = function(newValue){
      return this.ordenSinEmitir === newValue;
    };
    
    this.fin = function(){
      if(this.ordenDeArresto === this.detective.caso.villano){
        return ("Ganaste!!!");
      }
      else{
        return ("Perdiste T_T");
      }
    };
        
  });

 app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('ModalController', function($scope){
    $scope.showModal = false;
    $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
    };
  });


//directiva
  
  app.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
  
  
//directiva  

// Dummys "obj"?

var arg = {
  nombreDelPais : "Argentina",
  caracteristicasDelPais : ["Se constituye de 24 entidades, 23 provincias y una ciudad autónoma",
                            "La bandera consta de tres franjas dos celestes y una blanca",
                            "Es reconocida por su gran pasión por el fútbol"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["La moneda oficial es Naira","Flaco"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Flaco","Alto"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["La moneda oficial es Naira","La bandera consta de tres franjas dos verdes y una blanca"],
    images: ["images/embajada.jpg"]
  }],
  conexiones : {}
};

var china = {
  nombreDelPais : "China",
  caracteristicasDelPais : ["Estado soberano situado en Asia Oriental",
                            "Es el país más poblado del mundo",
                            "La moneda oficial es el Yuan"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/embajada.jpg"]
  }], 
  conexiones : {}
};
var nigeria ={
  nombreDelPais : "Nigeria",
  caracteristicasDelPais : ["La moneda oficial es Naira",
                            "Es el país más poblado de África",
                            "La bandera consta de tres franjas dos verdes y una blanca"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["La bandera tiene 3 colores verde, blanco y rojo","Flaco"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Flaco","Alto"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["La bandera tiene 3 colores verde, blanco y rojo","Es el mayor productor de plata en el mundo"],
    images: ["images/embajada.jpg"]
  }], 
  conexiones : {}
};
var brasil = {
  nombreDelPais : "Brasil",
  caracteristicasDelPais : ["El idioma oficial es el portugués",
                            "La moneda oficial es el real",
                            "Al norte del país se encuentra la cuenca amazónica"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/embajada.jpg"]
  }], 
  conexiones : {}
};
var mex= {
  nombreDelPais : "Mexico",
  caracteristicasDelPais : ["La bandera tiene 3 colores verde, blanco y rojo",
                            "Introdujo el chocolate, el chile y el maíz al resto del mundo ",
                            "Es el mayor productor de plata en el mundo"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["Capital Madrid","Alto"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Flaco","Alto"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["La bandera tiene 2 franjas rojas, una amarilla y un escudo","Capital Madrid"],
    images: ["images/embajada.jpg"]
  }], 
  conexiones : {}
};

var eu= {
  nombreDelPais : "Estados Unidos",
  caracteristicasDelPais : ["Capital Washington D. C.",
                            "Moneda oficial el Dolar",
                            "La bandera tiene 50 estrellas"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/bembajada.jpg"]
  }], 
  conexiones : {}
};
var espana= {
  nombreDelPais : "España",
  caracteristicasDelPais : ["La moneda oficial es el Euro",
                            "La bandera tiene 2 franjas rojas, una amarilla y un escudo",
                            "Capital Madrid"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["La moneda oficial es el Euro", "Flaco"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Flaco","Alto"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["La moneda oficial es el Euro", "La bandera tiene 3 colores negro, rojo y amarillo"],
    images: ["images/embajada.jpg"]
  }], 
  conexiones : {}
};
var italia= {
  nombreDelPais : "Italia",
  caracteristicasDelPais : ["Capital Roma","Moneda oficial es el Euro",
                            "La bandera tiene 3 colores verde, blanco y rojo"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["Lo siento, creo que se ha equivocado de Ciudad, no hay nadie con esas características"],
    images: ["images/embajada.jpg"]
  }], 
  conexiones : {}
};
var alemania= {
  nombreDelPais : "Alemania",
  caracteristicasDelPais : ["La moneda oficial es el Euro",
                            "La bandera tiene 3 colores negro, rojo y amarillo",
                            "Capital Berling"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca",
    informante : ["CUIDADO DETECTIVE!!!!"],
    images: ["images/biblioteca.jpg"]
  },{
    nombreDelLugar : "Club",
    informante : ["CUIDADO DETECTIVE!!!!"],
    images: ["images/club.jpg"]
  },{
    nombreDelLugar : "Embajada",
    informante : ["Alto Detengase!!!"],
    images: ["images/embajada.jpg"]
  }], 
  conexiones : {}
};

arg.conexiones =      [     china, nigeria, brasil, mex, eu, espana, italia, alemania];
china.conexiones =    [arg,        nigeria, brasil, mex, eu, espana, italia, alemania];
nigeria.conexiones =  [arg, china,          brasil, mex, eu, espana, italia, alemania];
brasil.conexiones =   [arg, china, nigeria,        mex, eu, espana, italia, alemania];
mex.conexiones =      [arg, china, nigeria, brasil,      eu, espana, italia, alemania];
eu.conexiones =       [arg, china, nigeria, brasil, mex,     espana, italia, alemania];
espana.conexiones =   [arg, china, nigeria, brasil, mex, eu,         italia, alemania];
italia.conexiones =   [arg, china, nigeria, brasil, mex, eu, espana,         alemania];
alemania.conexiones = [arg, china, nigeria, brasil, mex, eu, espana, italia          ];

var mapamundi = [arg, china, nigeria, brasil, mex, eu, espana, italia, alemania];
  
var expedientes = [{
  nombre : "El Pinguino",
  seniasParticulares : ["Alto","Pelado","Corpulento"],
  hobbies : ["El futbol","Pesca","Autos"],
  sexo : "Masculino"
},{
  nombre : "Loki",
  seniasParticulares : ["Alto","Flaco","Pelo castaño"],
  hobbies : ["Surf","El futbol","Rafting"],
  sexo : "Masculino"
},{
  nombre : "Gatubela",
  seniasParticulares : ["Usa vestidos","Es Fumadora","Usa jayas"],
  hobbies : ["Pintura","La fotografia","Hockey"],
  sexo : "Femenino"
},{
  nombre : "Madame Hydra",
  seniasParticulares : ["Delgada","Alta","Pelo largo de color verde oscuro"],
  hobbies : ["Lectura","Tiro con arco","Baile"],
  sexo : "Femenino"
}];

var planDeEscape = [arg,nigeria,mex,espana,alemania];
  
var caso = {
  planDeEscape : planDeEscape,
  villano : expedientes[1],
  ciudadActual : planDeEscape[0],
  paisesVisitados : [planDeEscape[0]]
};
  
var detective = {
  expedientes : expedientes,
  mapamundi : mapamundi,
  caso : caso       
};



})();
