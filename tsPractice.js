console.log("Typescript file");
// if(""==0)
// console.log(`"" and 0 are equal`);
// console.log(4/[]);
// const Rectangle ={width:500, height:500};
// const area = Rectangle.width * Rectangle.heigth;
// console.log(area);
// if(1<5<6)
//     console.log("true");
var stringVariable = "Hello!!";
console.log(stringVariable);
var stuDetails = {
    name: "Enanya",
    standard: 2,
    marks: 233,
    grade: 'B',
    hasregistered: true,
    // updateProperties(){
    //           stuDetails.grade = "A";
    //           console.log("stu updated grade is: ",stuDetails.grade);
    //         }
    // isDancer:true,
};
stuDetails.name = "oviya";
console.log(stuDetails);
stuDetails.updateProperties = function () {
    stuDetails.grade = "A";
    console.log("stu updated grade is........... ", stuDetails.grade);
};
stuDetails.updateProperties();
var studentDetails = /** @class */ (function () {
    function studentDetails(name, marks, isDancer, standard, grade, hasregistered) {
        this.name = name;
        this.marks = marks;
        this.isDancer = isDancer;
        this.standard = standard;
        this.grade = grade;
        this.hasregistered = hasregistered;
    }
    studentDetails.prototype.updateProperties = function () {
        this.name = "saswin";
        // this.isDancer=false;
    };
    return studentDetails;
}());
var student_1 = new studentDetails("varna", 250, true, 2, 'A', true);
console.log(student_1);
// student_1.isDancer=false;
// student_1.updateProperties();
console.log(student_1);
var sampleText = "text";
function getStudentDetails(student_3) {
    student_3.name = "hanika";
    student_3.grade = "B";
    return student_3;
}
var student_3 = new studentDetails("Anjum", 270, false, 2, 'A', true);
var updatedstudent_3 = getStudentDetails(student_3);
console.log("func returned obj:");
console.log(updatedstudent_3);
var bulbstatus = "On";
// bulbstatus="strng"; 
var doorstatus = "Closed";
// doorstatus:isDoorOpen="str";
function arrayConcat(num1, num2) {
    return num1.concat(num2);
}
console.log(arrayConcat([2, 9, 5], 3));
console.log(arrayConcat([1, 2], [3, 4]));
//any
var anyTypeVariable;
anyTypeVariable = "takes string";
console.log(anyTypeVariable);
anyTypeVariable = function () {
    console.log("any variable takes as a function");
};
anyTypeVariable();
var static_function = /** @class */ (function () {
    function static_function(num1) {
        this.num1 = num1;
        ++static_function.count;
        console.log(static_function.count);
    }
    static_function.count = 0;
    return static_function;
}());
var object = new static_function(10);
var object2 = new static_function(23);
// static_function.count=1
// generics
function typevariablesfunction(variable1, variable2) {
    return [variable2, variable1];
}
console.log(typevariablesfunction(50, "string"));
function typecheckFunction(shape) {
    console.log(shape.x, shape.y);
}
var rec = { x: 4, y: 5 };
typecheckFunction(rec);
var parallelogram = { x: 4, z: 8, y: 9 };
typecheckFunction(parallelogram);
//func declaration
var Addition;
Addition = function (num1, num2) {
    console.log("Additon of 2 numbers", num1 + num2);
};
Addition(10, 20);
//without func dec
function Subtraction(num1, num2) {
    console.log("subtraction of 2 numbers", num1 - num2);
}
Subtraction(90, 50);
