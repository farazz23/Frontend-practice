const marks = [
  {id: "01", marks: 98},
  {id: "02", marks: 96},
  {id: "03", marks: 83},
  {id: "04", marks: 74},
  {id: "05", marks: 90},
]

//* Find all the student who have scored greater thean 90
const finalMarks = marks.filter((score) => score.marks >= 90)
// console.log(finalMarks)


//* Find the maximum marks scored in class;
const highest = 0;
const highestInTheRoom = marks.filter((mark) => {
  if (mark > highest){
    highest = mark
  }
} )
console.log(highestInTheRoom)