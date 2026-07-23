function randomUser() {
  fetch(`https://randomuser.me/api/`).then(function(raw) {
    return raw.json();
  }).then(function (data) {
    //  console.log(data);
     const user = data.results[0];

      document.getElementById("user").innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <p><strong>Username:</strong> ${user.login.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Country:</strong> ${user.location.country}</p>
        <p><strong>Age:</strong> ${user.dob.age}</p>
      `;
    })
    .catch(function (error) {
      console.log("Error:", error);
  });
}
randomUser();