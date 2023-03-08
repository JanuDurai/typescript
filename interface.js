//interface-object
var details = {
    name: "janu",
    age: 23
};
//interface-class 
var student_details = /** @class */ (function () {
    function student_details(name, age) {
        this.name = name;
        this.age = age;
    }
    return student_details;
}());
var stu_1 = new student_details("boomi", 22);
console.log(details.name);
