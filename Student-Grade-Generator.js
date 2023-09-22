function  studentGrade(marks) {
    // Marks between 80 and 100 are graded as "A"
    if (marks > 79 && marks <= 100) {
        return 'A';
    // Marks between  60 and 79 are graded as "B"    
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    // Marks between 50 and 59 are graded as "C"
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    // Marks between 40 and 49 are graded as "D"
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    // Marks below 40 are graded as "E"
    } else if (marks <= 39 && marks >= 0) {
        return 'E'
    // Marks above 100 and below 0 are grade as "Invalid Grade"
    } else {
        return 'Invalid Grade';
    }
}

// An example of Marks = 72 is graded as "B"s
console.log(studentGrade(72));