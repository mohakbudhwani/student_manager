import React from 'react';

function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h2>All students:</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.phone} - {student.address}
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
