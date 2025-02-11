function calculateCGPA() {
    let gradePoints = {
        "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "U": 0
    };

    let subjects = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8"];
    let totalCredits = 24;  // Adjust based on actual subject credits
    let earnedPoints = 0;
    let failed = false;

    subjects.forEach(sub => {
        let grade = document.getElementById(sub).value;
        if (grade === "") {
            alert("Please select a grade for all subjects.");
            failed = true;
            return;
        }
        earnedPoints += gradePoints[grade] * 3;  // Assuming each subject has 3 credits
    });

    if (failed) return;

    let gpa = earnedPoints / totalCredits;
    alert("Your GPA for Semester 6 is: " + gpa.toFixed(2));
}
