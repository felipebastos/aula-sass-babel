"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _nome = new WeakMap();

var Qualquer = function Qualquer() {
  _classCallCheck(this, Qualquer);

  _nome.set(this, {
    writable: true,
    value: "fora"
  });

  this.coisa = "alguma";
  this.algo = 'assim';
};

var algo = new Qualquer();