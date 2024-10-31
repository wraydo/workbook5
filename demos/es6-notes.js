//1. When does the PROG200 course start?
for (const course of courses) {
    if (course.CourseId === "PROG200") {
      console.log(`The PROG200 course starts:  ${course.StartDate}`);
    }
  }
  
  //1.1 using find
  //create a function that takes a single object as a parameter and returns true or false based on a comparison
  function isPROG200(course) {
    return course.CourseId == "PROG200";
  }
  
  //declare a variable to hold a single object that needs to be found in the array
  //assign (=) into that single object the return value of the find function
  //call the find function on the array and pass it the comparison function as the single parameter
  let course = courses.find(isPROG200);
  //after you get the object back, use dot notation to get to specific properties and print them out to the screen
  console.log(course.StartDate);
  
  // // What is the title of the PROJ500 course?
  // for (const course of courses) {
  //   if (course.CourseId === "PROJ500") {
  //     console.log(`The title of the PROJ500 course is ${course.Title}`);
  //   }
  // }
  
  // // What are the titles of the courses that cost $50 or less? // What classes meet in "Classroom 1"?
  // for (const course of courses) {
  //   if (Number(course.Fee) <= 50) {
  //     console.log(`Inexpensive course: ${course.Title}`);
  //   }
  // }
  
  // let inexpensiveCourseTitles = [];
  
  // for (const course of courses) {
  //   if (Number(course.Fee) <= 50) {
  //     inexpensiveCourseTitles.push(course);
  //   }
  // }
  
  // console.log("Inexpensive course list: ", inexpensiveCourseTitles);
  
  //create a function that takes a single object as a parameter and returns true or false based on a comparison
  function isInexpensive(course) {
    return Number(course.Fee) <= 50;
  }
  
  
  //declare a variable to hold an array of objects that meet the comparison
  //assign (=) into that array the return value of the filter function
  //call the filter function on the array and pass it the comparison function as the single parameter
  let inexpensiveCourseTitles = courses.filter(isInexpensive);
  console.log("Inexpensive course list: ", inexpensiveCourseTitles);
  
  // let filmName = "Bobbie Boots";
  // let result = filmName.indexOf("Bob");
  // console.log(result);





