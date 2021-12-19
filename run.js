//Imprime las propiedades module
console.log("\nEJEMPLO 1");
console.log(module);

//exports is a reference to modules.exports. 
console.log("\nEJEMPLO 2");
exports.a = "A";
exports.b = "B";
console.log(module);

// EJEMPLO 3
//Assign properties to the exports object is a neat shortcut if you want to export an object from your module
console.log("\nEJEMPLO 3");
console.log(module);
console.log(exports === module.exports);
console.log(module.exports);

//EJEMPLO 4
// If you assign anything to module.exports, exports is not no longer a reference to it, and exports loses all its power.
console.log("\nEJEMPLO 4");
module.exports = { a: "A" };
exports.b = "B";  //esta propiedad se ignora
console.log(exports === module.exports);
console.log(module);
