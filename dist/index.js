"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(O,u){
var q=require('@stdlib/stats-strided-nanstdevpn/dist').ndarray;function c(e,r,a,n,o){return q(e,r,a,n,o)}u.exports=c
});var v=s(function(R,i){
var y=require('@stdlib/strided-base-stride2offset/dist'),f=t();function p(e,r,a,n){return f(e,r,a,n,y(e,n))}i.exports=p
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),l=t();x(d,"ndarray",l);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
