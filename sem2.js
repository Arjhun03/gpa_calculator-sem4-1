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
        "sub1": 2,
        "sub2": 4,
        "sub3": 3,
        "sub4": 4,
        "sub5": 3,
        "sub6": 1,
        "sub7": 3,
        "sub8": 2,
        "sub9": 1.5,
        "sub10": 1.5,
    };

    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= 10; i++) {
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
    alert(`Your GPA for Semester 2 is: ${gpa.toFixed(2)}`);
}

document.getElementById("calculateGPA").addEventListener("click", calculateGPA);