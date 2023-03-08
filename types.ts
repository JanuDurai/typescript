 export{}
 let  stu_name:string="janu shree";
 console.log(stu_name);

//interface-object
var details: Details = {
	name: "janu",
	age: 23,
	//dept: "eee",
};
interface Details {
	name: string,
	age: number,
}

//interface-class 
class student_details {
	name: string;
	age: number;
	constructor(name:string,age:number){
		this.name=name;
		this.age=age;
	}
}
var stu_1: Details=new student_details("boomi",22);
console.log(details.name);

// var subtypes
let varnull: string= null;
let varundef: boolean= undefined;

//To dec array
 var array:number[]= [10,20];
 var array2:Array<number>= [30,40];
 console.log(array,array2);
console.log(typeof(array));
console.log(typeof(varnull));

//tuples
let tuple: [string,number,boolean]= ["janu",10,true];
console.log(tuple);

//enum
enum Color {black,red,orange,pink=10,green};
var code: Color=Color.orange;
console.log(`black :${Color.black}, code:${code}, color: ${Color.green} `);

//any
var anytype: any= 20;
anytype="string type";
console.log(anytype);
//console.log(anytype.name);
//anytype(); java script shows error
anytype=true;
//anytype.toUpperCase(); java script shows error

//unknown type
function hasproperty(obj:any): obj is {name:string}{
      return typeof obj=== "object" && "name" in obj
    }
var unknowntype: unknown= 30;
unknowntype="string type";
if(hasproperty(unknowntype))
  console.log(unknowntype.name);
  //console.log(unknowntype.name);



