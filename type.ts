type Student ={
    name:string;
    rollno:number;
    subjects:string;

};
function printstudent(std:Student) :Student{
    console.log(std.name);
    console.log(std.rollno);
    console.log(std.subjects);
    return({name:"abhinav",rollno:36,subjects:"maths"})
}