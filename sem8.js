function calculateGPA() {
    const gradePoints = {
        "O": 10,
        "A+": 9,
        "A": 8,
        "B+": 7,
        "B": 6,
        "C": 5,
        "U": 0
    };
    
    const credits = {
        "sub1": 10
        };
    
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    for (let i = 1; i <= 1; i++) {
        let subject = document.getElementById(`sub${i}`).value;
        if (subject in gradePoints) {
            totalGradePoints += gradePoints[subject] * credits[`sub${i}`];
            totalCredits += credits[`sub${i}`];
        }
    }
    
    let gpa = totalGradePoints / totalCredits;
    alert(`Your GPA for Semester 8 is: ${gpa.toFixed(2)}`);
  }
  
  document.querySelector("button").addEventListener("click", calculateGPA);
  