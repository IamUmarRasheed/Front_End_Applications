class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}
class Student extends person {
  rollNumber: string;
  courses: course[] = [];
  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }
  registerForcoursese(course: course) {
    this.courses.push(course);
  }
}
class Instructor extends person {
  salary: number;
  courses: course[] = [];
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  assigncourses(course: course) {
    this.courses.push(course);
  }
}
class course {
  id: string;
  name: string;
  students: Student[] = [];
  instructor!: Instructor;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  addsudents(student: Student) {
    this.students.push(student);
    student.registerForcoursese(this);
  }
  setinstructor(instructor: Instructor) {
    this.instructor = instructor;
    instructor.assigncourses(this);
  }
}
class deparment {
  name: string;
  courses: course[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addcourses(course: course) {
    this.courses.push(course);
  }
}
const student1 = new Student("umar", 24, "60220piaiac");
const student2 = new Student("haider", 22, "602piac");
const instructor1 = new Instructor("zia", 33, 5666);
const course1 = new course("cour1", "meta");
const course2 = new course("course2", "bloc");
course1.addsudents(student1);
course2.addsudents(student2);
course1.setinstructor(instructor1);
const department1 = new deparment("computer");
department1.addcourses(course1);

console.log(student1);
console.log(course1);
console.log(instructor1);
console.log(department1);
