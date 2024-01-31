console.log("Typescript file");

// if(""==0)
// console.log(`"" and 0 are equal`);

// console.log(4/[]);

// const Rectangle ={width:500, height:500};
// const area = Rectangle.width * Rectangle.heigth;
// console.log(area);

// if(1<5<6)
//     console.log("true");

let stringVariable: String="Hello!!";
console.log(stringVariable);

interface userInterface {
    name:string,
    standard: number,
    marks:number,
    grade:string,
    hasregistered: boolean,
    isDancer?: boolean,
    updateProperties ? ();
}

 let stuDetails:userInterface = {
    name: "Enanya",
    standard:2,
    marks:233,
    grade: 'B',
    hasregistered:true,
    // isDancer:true,
 }   
 console.log(stuDetails);

class studentDetails{
    name:string;
    marks:number;
    isDancer:boolean;
    standard:number;
    grade:string;
    hasregistered:boolean;
  constructor(name,marks,isDancer,standard,grade,hasregistered) {
      this.name=name;
      this.marks=marks;
      this.isDancer=isDancer;
      this.standard=standard;
      this.grade=grade;
      this.hasregistered=hasregistered;
  }
      
  updateProperties (){
    this.name="saswin";
    // this.isDancer=false;
}
   
}
let student_1:userInterface = new studentDetails("varna",250,true,2,'A',true);
console.log( student_1); 

student_1.isDancer=false;

student_1.updateProperties();
console.log(student_1);

 let sampleText="text";

 function getStudentDetails(student_3:userInterface):userInterface{
         student_3.name="hanika";
         student_3.grade="B";
         return student_3;
 }
 
 let student_3:userInterface = new studentDetails("Anjum",270,false,2,'A',true);
student_3=getStudentDetails(student_3);
 console.log(student_3);
 

//  type

type isBulbOn = "On" | "Off";
type isDoorOpen = "Open" | "Closed";


function arrayConcat(num1:number[],num2:number | number[]):number|number[]{
            return num1.concat(num2);
}

console.log(arrayConcat([2,9,5],3));

console.log(arrayConcat([1,2],[3,4]));

//any

let anyTypeVariable:any;
anyTypeVariable="takes string";
console.log(anyTypeVariable);


anyTypeVariable = ()=> {
    console.log("any variable takes as a function");
    
}
anyTypeVariable();
















