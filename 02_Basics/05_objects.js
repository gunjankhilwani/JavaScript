// De structuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//console.log(course.courseInstructor);

const {courseInstructor : instructor}=course
console.log(instructor); 