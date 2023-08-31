
const enrolledStudents = [];

function enrollStudent() {
  const form = document.getElementById('registrationForm');
  const name = form.name.value;
  const email = form.email.value;
  const website = form.website.value;
  const image = form.image.value;
  const gender = form.querySelector('input[name="gender"]:checked').value;
  const skills = Array.from(form.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value);

  const studentData = {
    name,
    email,
    website,
    image,
    gender,
    skills,
  };

  enrolledStudents.push(studentData);
  displayEnrolledStudents();
  clearForm();
}

function displayEnrolledStudents() {
  const displayData = document.getElementById('displayData');
  displayData.innerHTML = `
    <h2>Enrolled Students:</h2>
    <ul>
      ${enrolledStudents.map(student => `
        <li>
          <img src="${student.image}" alt="User Image" style="max-width: 100px;"><br>
          <strong>Name:</strong> ${student.name}<br>
          <strong>Email:</strong> ${student.email}<br>
          <strong>Website:</strong> ${student.website}<br>
          <strong>Gender:</strong> ${student.gender}<br>
          <strong>Skills:</strong> ${student.skills.join(', ')}<br>
        </li>
      `).join('')}
    </ul>
  `;
}

function clearForm() {
  document.getElementById('registrationForm').reset();
}



  
  