"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

//double equals means to compare operators
// function isProg200(course) {
//   if (course.CourseId == "PROG200") {
//     return true;
//   }
// }
//single equals is an assignment
//array methods
// let course = courses.find(isProg200);

// console.log(course.StartDate);

for (const course of courses) {
  if (course.CourseId === "PROJ500") {
    console.log(course.Title);
  }
}

function isProj500(course) {
  return course.CourseId === "PROJ500";
}
let course = courses.find(isProj500);
console.log(course.Title);

