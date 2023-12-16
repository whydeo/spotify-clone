      // resise sidebar dua duanya yak
var resizer = document.querySelector(".resizer"),
sidebar = document.querySelector(".sidebar");
function initResizerFn( resizer, sidebar ) {
var mosawal, lebar;
function rs_mousedownHandler( e ) {
   mosawal = e.clientX;
   var sbWidth = window.getComputedStyle( sidebar ).width;
   lebar = parseInt( sbWidth, 10 );

   document.addEventListener("mousemove", rs_mousemoveHandler);
   document.addEventListener("mouseup", rs_mouseupHandler);
}

function rs_mousemoveHandler( e ) {
   var jarak = e.clientX - mosawal;

   var batas = lebar + jarak; 
   var batasbru = lebar + jarak;
   
   if ( batas > 230   && batasbru < 400 ) {
      sidebar.style.width = `${ batas }px`;
   }
}
function rs_mouseupHandler() {
   document.removeEventListener("mouseup", rs_mouseupHandler);
   document.removeEventListener("mousemove", rs_mousemoveHandler);
}
resizer.addEventListener("mousedown", rs_mousedownHandler);
}
initResizerFn( resizer, sidebar );

 
var sise = document.querySelector(".sise"),
side = document.querySelector(".side");

function initsiseFn( sise, side ) {
var x, w;

function rs_mousedownHandler( e ) {

   x = e.clientX;

   var sbWidth = window.getComputedStyle( side ).width;
   w = parseInt( sbWidth, 10 );

   document.addEventListener("mousemove", rs_mousemoveHandler);
   document.addEventListener("mouseup", rs_mouseupHandler);
}

function rs_mousemoveHandler( e ) {
   var dx = x - e.clientX ;

   var cw = w + dx; 
   var nw = w + dx;
   if ( cw > 280 && nw < 400 ) {
      side.style.width = `${ cw }px`;
   }
}

function rs_mouseupHandler() {
   
   document.removeEventListener("mouseup", rs_mouseupHandler);
   document.removeEventListener("mousemove", rs_mousemoveHandler);
}

sise.addEventListener("mousedown", rs_mousedownHandler);
}


initsiseFn( sise, side );


 
