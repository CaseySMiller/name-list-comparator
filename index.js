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
  ' Kendall Sorenson',
    ' Tisha Parry',
    ' Kyle Kirby',
    ' Aaron Bringhurst',
    ' Tristan Smith',
    ' Derek Sego',
    ' Patrick Granger',
    ' Charlotte Dalton',
    ' Jacob Toton',
    ' Dayel Przybyla',
    ' Sean Madigan',
    ' Cheryl Fenton',
    ' Brennan Waterbury',
    ' Alex Mcmicken',
    ' Aiona Hernandez',
    ' Brett Czerwinski',
    ' Charles Shumway',
    ' Ricardo Shade',
    ' Kai Griffiths',
    ' Eric Edmunds',
    ' Charles Wilson',
    ' Olivia Rodriguez',
    ' Dallas Giles',
    ' Michael Anderson',
    ' Betzaida Taylor',
    ' Ben Schwendiman',
    ' Paula Gonzalez',
    ' Thai Tran',
    ' Patrick Riedinger',
    ' Robert Maxfield',
    ' Brad Burr',
    ' John Shumway',
    ' David Pippin',
    ' Karina Gonzalez',
    ' Jorge Castro'
]

console.log(`Array 1 length is ${array1.length}`)
console.log(`Array 2 length is ${array2.length}`)

const compareArrays = (array1, array2) => {
  const result = array1.filter((item) => {
    return !array2.includes(item);
  });
  const resultRversed = array2.filter((item) => {
    return !array1.includes(item);
  });

  const outputString = result.join(', ')
  const outputStringReversed = resultRversed.join(', ')
  const output = `Array 1 contains the name(s): ${outputString} that are not in Array 2 and Array 2 contains the nmae(s): ${outputStringReversed} that are not in Array 1`
  return output;
}

console.log(compareArrays(array1, array2));