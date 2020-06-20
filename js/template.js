var current_user = null;
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.pathname = "/login";
  } else {
    current_user = user;
  }
});

var form = document.getElementById("form");

form.onsubmit = (e) => {
  e.preventDefault();
  if (current_user === null) {
    return;
  }
  var value = form["word"].value;
  if (
    letter.toUpperCase() + value.toUpperCase() === answer.toUpperCase() ||
    value.toUpperCase() === answer.toUpperCase()
  ) {
    current_user
      .updateProfile({
        displayName: parseInt(current_user.displayName) + 10,
      })
      .then(() => {
        if (
          confirm(
            "Correct Answer. You have " + current_user.displayName + " points!"
          )
        ) {
          window.location.pathname = "/";
        } else {
          window.location.pathname = "/";
        }
      });
  } else {
    if (
      confirm(
        "Incorrect answer. The correct answer was " +
          answer +
          ". You have " +
          current_user.displayName +
          " points!"
      )
    ) {
      window.location.pathname = "/";
    } else {
      window.location.pathname = "/";
    }
  }
};

function logout() {
  firebase.auth().signOut();
}
