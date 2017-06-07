(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.colorPal = factory());
}(this, (function () { 'use strict';

var index = {
  aqua: '#44d9e6',
  black: '#222831',
  blue: '#009eeb',
  beige: '#fdffe7',
  brown: '#3d262a',
  coral: '#FFB270',
  crimson: '#921224',
  fuchsia: '#EA2BA2',
  gold: '#fef2a0',
  gray: '#4b4a5a',
  lime: '#a6ed8e',
  green: '#2ecc40',
  indigo: '#2a2b5f',
  navy: '#073059',
  olive: '#5c835a',
  orange: '#ff6a38',
  red: '#f64747',
  pink: '#f9a1bc',
  purple: '#61105e',
  yellow: '#ffdd67',
  snow: '#f6f6f6',
  white: '#fff',
  silver: '#d3d6db'
};

return index;

})));
