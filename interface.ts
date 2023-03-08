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
