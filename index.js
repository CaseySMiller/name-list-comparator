//string of names from BCS
const studentsString = `Anderson, Michael
Present
Bringhurst, Aaron
Present
Burr, Brad
Present
Castro, Jorge
Present
Czerwinski, Brett
Present
Dalton, Charlotte
Present
Edmunds, Eric
Present
Fenton, Cheryl
Present
Fischer, Joel
Present
Giles, Dallas
Present
Gonzalez, Karina
Present
Gonzalez, Paula
Present
Granger, Patrick
Present
Griffiths, Kai
Present
Hernandez, Aiona
Present
Kirby, Kyle
Present
Madigan, Sean
Present
Maxfield, Robert
Present
McKinney, Elizabeth
Present
Mcmicken, Alex
Present
Parry, Tisha
Present
Pippin, David
Present
Przybyla, Dayel
Absent
Riedinger, Patrick
Present
Rodriguez, Olivia
Present
Schwendiman, Ben
Present
Sego, Derek
Present
Shade, Ricardo
Present
Shumway, Charles
Present
Shumway, John
Present
Smith, Tristan
Present
Sorenson, Kendall
Present
Taylor, Betzaida
Present
Toton, Jacob
Present
Tran, Thai
Present
Waterbury, Brennan
Present
Wilson, Charles
Present`;

const parseStudents = (studentsString) => {
  const studentsArray = studentsString.split("\n");

  const filteredArray = studentsArray.filter((item) => {
    return (
      item !== "None" &&
      item !== "Present" &&
      item !== "Absent" &&
      item !== "Absent - Excused"
    );
  });

  const output = filteredArray.map((fullName) => {
    class Student {
      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    }

    Student.prototype.fullName = function () {
      return `${this.firstName} ${this.lastName}`;
    }

    const nameArray = fullName.split(", ");
    const studentObject = new Student(nameArray[1], nameArray[0]);
    return studentObject;
  });

  return output;
};

const students = parseStudents(studentsString).map((student) => {
  return student.fullName();
});
console.log('wtf', students);
console.log(
  `There are ${parseStudents(studentsString).length} students in this class.`
);

// groups of 5
const array1 = [
  " Charles Wilson",
  " Derek Sego",
  " Sean Madigan",
  " Aiona Hernandez",
  " Jorge Castro",
  " Betzaida Taylor",
  " Olivia Rodriguez",
  " Robert Maxfield",
  " Cheryl Fenton",
  " Aaron Bringhurst",
  " Jacob Toton",
  " Patrick Riedinger",
  " Beth McKinney",
  " Karina Gonzalez",
  " Brad Burr",
  " Tristan Smith",
  " Ben Schwendiman",
  " David Pippin",
  " Dallas Giles",
  " Brennan Waterbury",
  " Ricardo Shade",
  " Kyle Kirby",
  " Paula Gonzalez",
  " Michael Anderson",
  " Thai Tran",
  " John Shumway",
  " Tisha Parry",
  " Kai Griffiths",
  " Charlotte Dalton",
  " Kendall Sorenson",
  " Charles Shumway",
  " Alex Mcmicken",
  " Patrick Granger",
  " Eric Edmunds",
];

//groups of 4
const array2 = [
  " Kendall Sorenson",
  " Tisha Parry",
  " Kyle Kirby",
  " Aaron Bringhurst",
  " Tristan Smith",
  " Derek Sego",
  " Patrick Granger",
  " Charlotte Dalton",
  " Jacob Toton",
  " Dayel Przybyla",
  " Sean Madigan",
  " Cheryl Fenton",
  " Brennan Waterbury",
  " Alex Mcmicken",
  " Aiona Hernandez",
  " Brett Czerwinski",
  " Charles Shumway",
  " Ricardo Shade",
  " Kai Griffiths",
  " Eric Edmunds",
  " Charles Wilson",
  " Olivia Rodriguez",
  " Dallas Giles",
  " Michael Anderson",
  " Betzaida Taylor",
  " Ben Schwendiman",
  " Paula Gonzalez",
  " Thai Tran",
  " Patrick Riedinger",
  " Robert Maxfield",
  " Brad Burr",
  " John Shumway",
  " David Pippin",
  " Karina Gonzalez",
  " Jorge Castro",
];

// console.log(`Array 1 length is ${array1.length}`)
// console.log(`Array 2 length is ${array2.length}`)

const compareArrays = (array1, array2) => {
  const result = array1.filter((item) => {
    return !array2.includes(item);
  });
  const resultRversed = array2.filter((item) => {
    return !array1.includes(item);
  });

  const outputString = result.join(", ");
  const outputStringReversed = resultRversed.join(", ");
  const output = `Array 1 contains the name(s): ${outputString} that are not in Array 2 and Array 2 contains the nmae(s): ${outputStringReversed} that are not in Array 1`;
  return output;
};

// console.log(compareArrays(array1, array2));
