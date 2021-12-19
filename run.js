//Imprime las propiedades module
console.log("\nEJEMPLO 1");
console.log("exports ==> ", exports);
console.log("module ==> ", module);

//exports is a reference to modules.exports. 
console.log("\nEJEMPLO 2");
console.log("Se asignan los valores de exports.a y exports.b")
exports.a = "A";
exports.b = "B";
console.log("Son iguales? ==> ", exports === module.exports);
console.log("exports ==> ", exports);
console.log("module ==> ", module);

//EJEMPLO 3
// If you assign anything to module.exports, exports is not no longer a reference to it, and exports loses all its power.
console.log("\nEJEMPLO 3");
console.log("Se asigna la propiedad module.exports");
module.exports = { a: "A" };
console.log("Luego se asigna exports.b");
exports.b = "B";  //esta propiedad se ignora
console.log("Son iguales? ==> ", exports === module.exports);
console.log("exports ==> ", exports);
console.log("module ==> ", module);

