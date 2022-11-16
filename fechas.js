let fechaHoy = new Date();
let cumple = new Date("January 12 1997");
let comparar = fechaHoy.getTime() > cumple;
let diaCumple = cumple.getDate();
let mesCumple = cumple.getMonth() + 1;
let anioCumple = cumple.getFullYear();