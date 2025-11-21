function processStudents(students) {
    // 1. Filter students who scored above 60
    let filtered = students.filter(function (student) {
        return student.marks > 60;
    });

    // 2. Sort in descending order of marks
    filtered.sort(function (a, b) {
        return b.marks - a.marks;
    });

    // 3. Map to extract names only
    let result = filtered.map(function (student) {
        return student.name;
    });

    return result;
}



let students = [
    { "name": "Alice", "marks": 58 },
    { "name": "Bob", "marks": 85 },
    { "name": "Charlie", "marks": 92 },
    { "name": "David", "marks": 45 },
    { "name": "Emma", "marks": 76 },
    { "name": "Frank", "marks": 63 },
    { "name": "Grace", "marks": 89 },
    { "name": "Hannah", "marks": 95 },
    { "name": "Ian", "marks": 54 },
    { "name": "Jack", "marks": 79 },
    { "name": "Kate", "marks": 67 },
    { "name": "Leo", "marks": 88 },
    { "name": "Mia", "marks": 91 },
    { "name": "Nathan", "marks": 72 },
    { "name": "Olivia", "marks": 82 }
];

let output = processStudents(students);
console.log(output);
