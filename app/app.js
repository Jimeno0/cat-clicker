'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
  .controller('catClicker', function catClicker() {
    var self = this;
  self.counterCat1 = 0;
  self.counterCat2 = 0;
  self.selected = null;
  self.selectCat =  selectCat;
  self.cats = [
  { id:1,
    name:'Coco',
    src:'/cat-clicker/images/coco.jpg',
    count:0},
  { id:2,
    name:'Sombra',
    src:'/cat-clicker/images/sombra.jpg',
    count:0},
  { id:3,
    name:'Frodo',
    src:'/cat-clicker/images/frodo.jpg',
    count:0},
  { id:4,
    name:'Scar',
    src:'/cat-clicker/images/scar.jpg',
    count:0},
  { id:5,
    name:'Felix',
    src:'/cat-clicker/images/felix.jpg',
    count:0}
  ];

  function selectCat (cat) {
    self.selected = cat;
    console.log(cat.name);

  }


});
