let read=require("readline-sync");
let valor=read.questionInt("Ingrese valor producto");
let descuento=read.questionInt("Ingrese descuento");
console.log("precio final", valor*(100-descuento)/100);

 