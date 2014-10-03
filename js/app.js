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
      this.detective.caso.paisesVisitados += this.siguientePais
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


// Dummys "obj"?

var arg = {
  nombreDelPais : "Argentina",
  caracteristicasDelPais : ["Se constituye de 24 entidades, 23 provincias y una ciudad autónoma",
                            "La bandera consta de tres franjas dos celestes y una blanca",
                            "Es reconocida por su gran pasión por el fútbol"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }],
  conexiones : {}
};

var china = {
  nombreDelPais : "China",
  caracteristicasDelPais : ["Estado soberano situado en Asia Oriental",
                            "Es el país más poblado del mundo",
                            "La moneda oficial es el Yuan"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }], 
  conexiones : {}
};
var nigeria ={
  nombreDelPais : "Nigeria",
  caracteristicasDelPais : ["La moneda oficial es Naira",
                            "Es el país más poblado de África",
                            "La bandera consta de tres franjas dos verdes y una blanca"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }], 
  conexiones : {}
};
var brasil = {
  nombreDelPais : "Brasil",
  caracteristicasDelPais : ["El idioma oficial es el portugués",
                            "La moneda oficial es el real",
                            "Al norte del país se encuentra la cuenca amazónica"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }], 
  conexiones : {}
};
var mex= {
  nombreDelPais : "Mexico",
  caracteristicasDelPais : ["La bandera tiene 3 colores verde, blanco y rojo",
                            "Introdujo el chocolate, el chile y el maíz al resto del mundo ",
                            "Es el mayor productor de plata en el mundo"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }], 
  conexiones : {}
};

var eu= {
  nombreDelPais : "Estados Unidos",
  caracteristicasDelPais : ["Capital Washington D. C.",
                            "Moneda oficial el Dolar",
                            "La bandera tiene 50 estrellas"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }], 
  conexiones : {}
};
var espana= {
  nombreDelPais : "España",
  caracteristicasDelPais : ["La moneda oficial es el Euro",
                            "La bandera tiene 2 franjas rojas, una amarilla y un escudo",
                            "Capital Madrid"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }], 
  conexiones : {}
};
var italia= {
  nombreDelPais : "Italia",
  caracteristicasDelPais : ["Capital Roma","Moneda oficial es el Euro",
                            "La bandera tiene 3 colores verde, blanco y rojo"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
  }], 
  conexiones : {}
};
var alemania= {
  nombreDelPais : "Alemania",
  caracteristicasDelPais : ["La moneda oficial es el Euro",
                            "La bandera tiene 3 colores negro, rojo y amarillo",
                            "Capital Berling"],
  lugaresDeInteres : [{
    nombreDelLugar : "Biblioteca"
  },{
    nombreDelLugar : "Club"
  },{
    nombreDelLugar : "Embajada"
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
