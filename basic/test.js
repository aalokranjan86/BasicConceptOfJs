let myGrade =function (scoredMarks,totalMarks) {
    let result= (scoredMarks/totalMarks)*100
    let grade=''
  if(result>=80){
    grade = 'Amazing'
  }else if (result>=60) {
    grade = 'Very Good'
  }else if (result>=40) {
    grade = 'Work hard'
  }else {
    grade = 'Fail'
  }
  return `Your totalMarks ${result} and your grade is: ${grade}`
}
console.log(myGrade(500,600));
