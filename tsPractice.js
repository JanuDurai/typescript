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
    // isDancer:true,
};
console.log(stuDetails);
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
student_1.isDancer = false;
student_1.updateProperties();
console.log(student_1);
var sampleText = "text";
function getStudentDetails(student_3) {
    student_3.name = "hanika";
    student_3.grade = "B";
    return student_3;
}
var student_3 = new studentDetails("Anjum", 270, false, 2, 'A', true);
student_3 = getStudentDetails(student_3);
console.log(student_3);
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
