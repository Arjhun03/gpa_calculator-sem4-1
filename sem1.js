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
        "sub1": 4,  
        "sub2": 4,
        "sub3": 3,
        "sub4": 3,
        "sub5": 3,
        "sub6": 1,
        "sub7": 2,
        "sub8": 2
    };

    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= 8; i++) {
        let subject = document.getElementById(`sub${i}`).value;
        if (subject in gradePoints) {
            totalGradePoints += gradePoints[subject] * credits[`sub${i}`];
            totalCredits += credits[`sub${i}`];
        }
    }

    if (totalCredits === 0) {
        alert("Please select grades for all subjects.");
        return;
    }

    let gpa = totalGradePoints / totalCredits;
    alert(`Your GPA for Semester 1 is: ${gpa.toFixed(2)}`);
}

// Attach event listener to button
document.querySelector("button").addEventListener("click", calculateGPA);