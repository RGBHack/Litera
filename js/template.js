firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.pathname = "/login";
  }
});

function correctAnswer () {

}

function logout () {
    firebase.auth().signOut()
}
