"use strict";
exports.__esModule = true;
var stu_name = "janu shree";
console.log(stu_name);
// var subtypes
var varnull = null;
var varundef = undefined;
//To dec array
var array = [10, 20];
var array2 = [30, 40];
console.log(array, array2);
console.log(typeof (array));
console.log(typeof (varnull));
//tuples
var tuple = ["janu", 10, true];
console.log(tuple);
//enum
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
    Color[Color["pink"] = 10] = "pink";
    Color[Color["green"] = 11] = "green";
})(Color || (Color = {}));
;
var code = Color.orange;
console.log("black :".concat(Color.black, ", code:").concat(code, ", color: ").concat(Color.green, " "));
//any
var anytype = 20;
anytype = "string type";
console.log(anytype);
//console.log(anytype.name);
//anytype(); java script shows error
anytype = true;
//anytype.toUpperCase(); java script shows error
//unknown type
function hasproperty(obj) {
    return typeof obj === "object" && "name" in obj;
}
var unknowntype = 30;
unknowntype = "string type";
if (hasproperty(unknowntype))
    console.log(unknowntype.name);
//console.log(unknowntype.name);
