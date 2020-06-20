var current_user = null;
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.pathname = "/login";
  }
  else {
    current_user = user;
  }
});

function quiz () {
  if (current_user === null) {
    return
  }
  var value = '';
  if (value.toUpperCase() === answer.toUpperCase()) {
    current_user.updateProfile({
      displayName: parseInt(current_user.displayName)+10,
    }).then(() => {
      alert("Correct Answer")
    })
  }
  else {
    alert("Incorrect answer! The answer was " + answer)
  }
}

function logout () {
  firebase.auth().signOut()
}
