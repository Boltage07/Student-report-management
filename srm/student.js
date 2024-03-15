document.addEventListener('DOMContentLoaded', function () {
    const addStudentForm = document.getElementById('add-student-form');
    const addStudentMessage = document.getElementById('add-student-message');

    addStudentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const studentName = document.getElementById('student-name').value;
        const studentId = document.getElementById('student-id').value;
        const studentGrade = document.getElementById('student-grade').value;

        
        const isStudentAdded = addStudent(studentName, studentId, studentGrade);

       
        if (isStudentAdded) {
            addStudentMessage.textContent = 'Student added successfully!';
        } else {
            addStudentMessage.textContent = 'Failed to add student. Please try again.';
        }
    });

    
    function addStudent(name, id, grade) {
       
        console.log(`Added Student: Name - ${name}, ID - ${id}, Grade - ${grade}`);


        return true; 
    }
});