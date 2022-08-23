console.clear();
const school = [
  {
    name: "FbW1",
    students: [
      {
        name: "Alex",
        email: "alex@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Max",
        email: "max@yahoo.com",
        city: "Hamburg",
      },
    ],
  },

  {
    name: "FbW2",
    students: [
      {
        name: "Jon",
        email: "jon@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
      },
    ],
  },
  {
    name: "FbW3",
    students: [],
  },
];

function createClass(newClassName) {
  // holds class name
  return school.push({ name: newClassName, students: [] });
}

function student(classID, studentID) {
  // holds class ID and the student data (obj with name, email, city)
  return school[classID - 1].students[studentID - 1];
}

function removeClass(classID) {
  // takes class id and remove that class by id
  delete school[classID - 1];
}

function removeStudent(classID, studentID) {
  // remove student by class id and student id
  let thisClass = school[classID - 1];
  let studentRemoving = thisClass.students[studentID - 1];
  delete studentRemoving;
}

function editStudent(classID, studentID) {
  // holds class ID and student ID
  // editStudent ==> info name, email and city.
  let thisClass = school[classID - 1];
  let studentEditing = thisClass.students[studentID - 1];
  return studentEditing;
}

function renderSchoolTemplate() {
  // format and render school data
  console.log(" School Classes:");
  let totalStudents = 0;
  console.log("------------------ ");
  for (let classObj of school) {
    totalStudents += classObj.students.length;
    if (classObj.students.length === 0) {
      console.log(
        ` ${classObj.name} - (class ID: ${school.indexOf(classObj) + 1}):`
      );
      console.log(`   The class is empty`);
      console.log("********************************************");
      continue;
    }
    console.log(
      ` ${classObj.name} - (class ID: ${school.indexOf(classObj) + 1}):`
    );
    for (let item of classObj.students) {
      console.log(
        `  ${classObj.students.indexOf(item) + 1}- ${item.name}, ${
          item.email
        }, ${item.city} - (student ID: ${classObj.students.indexOf(item) + 1}) `
      );
    }
    console.log("********************************************");
  }

  console.log(
    `  Total Classes ${school.length}, total students ${totalStudents}`
  );
}

renderSchoolTemplate();
