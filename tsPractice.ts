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
    // isDancer?: boolean,
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

// student_1.isDancer=false;

// student_1.updateProperties();
console.log(student_1);

 let sampleText="text";

 function getStudentDetails(student_3:userInterface):userInterface{
         student_3.name="hanika";
         student_3.grade="B";
         return student_3;
 }
 
 let student_3:userInterface = new studentDetails("Anjum",270,false,2,'A',true);
let updatedstudent_3=getStudentDetails(student_3);
 console.log("func returned obj:");
 console.log(updatedstudent_3);
 
 

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

class static_function{
  static count:number=0;
  num1:number;
  constructor(num1){
      this.num1=num1;
      ++static_function.count;
      console.log(static_function.count);
      
  }
}
let object=new static_function(10);
let object2=new static_function(23);
// static_function.count=1

// generics

function typevariablesfunction<Type1,Type2>(variable1:Type1,variable2:Type2): [Type2,Type1]{
       return [variable2,variable1];
}

console.log(typevariablesfunction<number,string>(50,"string"));

interface user<type>{
      var1:Array<type>,
      get<type>() : type,
      add<type>():void
}

// let user1:user<string> ={var1:["janu","shree","durai"]}

// user1.add(str){
//       user1.var1.push(str);
// }

// user1.add("string1");

// console.log(user1.var1);


// let Arrayofstrings:Array<string> =["array","of","strings"];
// console.log(Arrayofstrings);


//structural type system

interface typecheck {
      x:number,
      y:number
}

function typecheckFunction(shape:typecheck){
     console.log(shape.x,shape.y);     
}

let rec = {x:4,y:5}
typecheckFunction(rec);

let parallelogram={x:4,z:8,y:9}
typecheckFunction(parallelogram);












