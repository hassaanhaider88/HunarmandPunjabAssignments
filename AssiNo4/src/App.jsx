import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || age === "" || course === "") {
      alert("Please fill all fields");
      return;
    }

    const studentData = {
      name: name,
      age: age,
      course: course,
    };

    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = studentData;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, studentData]);
    }

    setName("");
    setAge("");
    setCourse("");
  };

  const handleEdit = (index) => {
    setName(students[index].name);
    setAge(students[index].age);
    setCourse(students[index].course);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newStudents = students.filter((item, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <div className="container">
      <h1>Student Record Management</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">
          {editIndex !== null ? "Update Student" : "Add Student"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>

              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
