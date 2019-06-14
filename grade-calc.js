//grade calculator function- needs to generate and return test score percent as well as letter grade


let gradeCalc = function(studentScore, totalPossibleScore = 100) {
let percent = (studentScore/totalPossibleScore)*100
let letterGrade = ''
if (percent >= 90) {
   letterGrade = 'A'
 } else if (percent >= 80 && percent <= 89 ) {
   letterGrade = 'B'
 } else if (percent >= 70 && percent <= 79) {
   letterGrade = 'C'
 } else if (percent >= 60 && percent <= 69 ) {
   letterGrade = 'D'
 } else {
   letterGrade = 'F'
 }
 return `Grade: ${letterGrade}, student scored ${percent}% out of ${totalPossibleScore}.`
}

let percentage = gradeCalc(90, 100);
console.log(percentage);
