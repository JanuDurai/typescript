console.log("janu");
console.log("shree");
// let greet :string="hello!!!";
var greet = "hello!!!";
console.log(typeof (greet));
var stud_1 = {
    // username:"shree",
    name: "janu",
    age: 10,
    std: 5,
    marks: 500,
};
console.log(stud_1.name);
var c_staffDetails = /** @class */ (function () {
    function c_staffDetails(name, age) {
        this.name = name;
        this.age = age;
    }
    return c_staffDetails;
}());
var staff_1 = new c_staffDetails("vasu", 20);
console.log("staff name: " + staff_1.name);
console.log("staff age: " + staff_1.age);
var ec_staffDetails = /** @class */ (function () {
    function ec_staffDetails(name, age, sub, lang) {
        this.name = name;
        this.age = age;
        this.sub = sub;
        this.lang = lang;
    }
    return ec_staffDetails;
}());
var obj_2 = new ec_staffDetails("sas", 20, "English", "english");
console.log("Extended Interface\nstaff name: " + obj_2.name + "\n" + "staff age: " + obj_2.age);
console.log("staff sub: " + obj_2.sub);
console.log("staff lang: " + obj_2.lang);
var obj_3 = { num1: 10, num2: 20 };
function addition(obj) {
    console.log("addition of 2 numbers is " + (obj.num1 + obj.num2));
}
addition(obj_3);
var f_class = /** @class */ (function () {
    function f_class(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    return f_class;
}());
var obj_4 = new f_class(50, 20);
addition(obj_4);
