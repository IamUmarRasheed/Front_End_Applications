class person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForcoursese(course) {
        this.courses.push(course);
    }
}
class Instructor extends person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assigncourses(course) {
        this.courses.push(course);
    }
}
class course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addsudents(student) {
        this.students.push(student);
        student.registerForcoursese(this);
    }
    setinstructor(instructor) {
        this.instructor = instructor;
        instructor.assigncourses(this);
    }
}
class deparment {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addcourses(course) {
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
export {};
