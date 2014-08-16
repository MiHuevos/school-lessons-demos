function fetchUserDetails() {
  var userName = document.getElementById("facebook-username").value;
  var nameHolder = document.getElementById("name");
  var genderHolder = document.getElementById("gender");
  var pictureHolder = document.getElementById("picture")

  $.getJSON("https://graph.facebook.com/" + userName + "?callback=?", function(data) {
    nameHolder.innerText = data.name;
    genderHolder.innerText = data.gender;
    pictureHolder.src = "https://graph.facebook.com/" + data.username + "/picture?width=400&height=400";
  });
};